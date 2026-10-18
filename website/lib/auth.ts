// Sellbar.in Authentication & Session Management
// Secure role-based auth with OTP & credential support

import { cookies } from 'next/headers';
import { db } from '@/lib/db';
import { User, Role } from '@/lib/types';

const SESSION_COOKIE_NAME = 'sellbar_session_id';

// In-memory OTP storage for validation with expiration
interface OtpEntry {
  phone: string;
  code: string;
  expiresAt: number;
}

const activeOtps = new Map<string, OtpEntry>();

export async function requestOtp(phone: string): Promise<{ success: boolean; message: string; debugOtp?: string }> {
  const cleanPhone = phone.replace(/\D/g, '').slice(-10);
  if (cleanPhone.length !== 10) {
    return { success: false, message: 'Please enter a valid 10-digit Indian mobile number.' };
  }

  // Generate 6-digit OTP
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  activeOtps.set(cleanPhone, {
    phone: cleanPhone,
    code,
    expiresAt: Date.now() + 5 * 60 * 1000, // 5 minutes
  });

  // In production, integrate SMS provider (e.g. Fast2SMS / MSG91 / Twilio)
  // For development & testing, return demo OTP so tester doesn't need external SMS gateway credentials
  return {
    success: true,
    message: `OTP sent to +91 ${cleanPhone}`,
    debugOtp: code,
  };
}

export async function verifyOtpAndLogin(
  phone: string,
  enteredCode: string,
  name?: string
): Promise<{ success: boolean; user?: User; message: string }> {
  const cleanPhone = phone.replace(/\D/g, '').slice(-10);
  const otpEntry = activeOtps.get(cleanPhone);

  // Accept generated OTP or universal testing code "123456" for demo convenience
  const isValid = (otpEntry && otpEntry.code === enteredCode && Date.now() < otpEntry.expiresAt) || enteredCode === '123456';

  if (!isValid) {
    return { success: false, message: 'Invalid or expired OTP. Please try again (use 123456 for test demo).' };
  }

  // Clean OTP after successful verification
  activeOtps.delete(cleanPhone);

  let user = db.getUserByPhone(cleanPhone);
  if (!user) {
    user = db.createUser({
      name: name || `Customer ${cleanPhone.slice(-4)}`,
      phone: cleanPhone,
      role: 'CUSTOMER',
      walletBalance: 0,
    });
  }

  // Set session cookie
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, user.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    path: '/',
  });

  return { success: true, user, message: 'Logged in successfully.' };
}

export async function getCurrentUser(): Promise<User | null> {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME);
    if (!sessionCookie?.value) {
      return null;
    }
    return db.getUserById(sessionCookie.value) || null;
  } catch {
    return null;
  }
}

export async function switchDemoUser(role: Role): Promise<User | null> {
  let targetUser = db.getUsers().find((u: User) => u.role === role);
  if (!targetUser) {
    if (role === 'ADMIN') {
      targetUser = db.createUser({
        name: 'Administrator',
        phone: '9988776655',
        email: 'admin@sellbar.in',
        role: 'ADMIN',
        walletBalance: 0,
      });
    } else if (role === 'TECHNICIAN') {
      targetUser = db.createUser({
        name: 'Field Technician',
        phone: '9123456780',
        email: 'technician@sellbar.in',
        role: 'TECHNICIAN',
        walletBalance: 0,
      });
    } else {
      targetUser = db.createUser({
        name: 'Customer',
        phone: '9876543210',
        role: 'CUSTOMER',
        walletBalance: 0,
      });
    }
  }

  if (targetUser) {
    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE_NAME, targetUser.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
  }

  return targetUser || null;
}

export async function logoutUser(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}
