// Sellbar.in - Auth.js / NextAuth Configuration
// Secure session handling with credentials and Indian phone OTP verification

import NextAuth, { type NextAuthConfig } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { db } from '@/lib/db';
import { verifyMsg91Otp } from '@/lib/integrations/msg91';

export const authConfig: NextAuthConfig = {
  providers: [
    CredentialsProvider({
      id: 'phone-otp',
      name: 'Phone OTP',
      credentials: {
        phone: { label: 'Phone', type: 'text' },
        otp: { label: 'OTP Code', type: 'text' },
      },
      async authorize(credentials) {
        if (!credentials?.phone || !credentials?.otp) {
          return null;
        }

        const phone = String(credentials.phone).replace(/\D/g, '').slice(-10);
        const otp = String(credentials.otp);

        // Verify OTP via MSG91 (or sandbox code 123456)
        const verifyRes = await verifyMsg91Otp(phone, otp);
        if (!verifyRes.verified) {
          return null;
        }

        // Retrieve or initialize user in MongoDB
        let user = db.getUserByPhone(phone);
        if (!user) {
          user = db.createUser({
            name: `User ${phone.slice(-4)}`,
            phone,
            role: 'CUSTOMER',
            walletBalance: 0,
          });
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role || 'CUSTOMER';
        token.phone = (user as any).phone;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token) {
        (session.user as any).id = token.id;
        (session.user as any).role = token.role;
        (session.user as any).phone = token.phone;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  secret: process.env.AUTH_SECRET || 'sellbar_super_secret_session_encryption_key_at_least_32_chars',
};

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
