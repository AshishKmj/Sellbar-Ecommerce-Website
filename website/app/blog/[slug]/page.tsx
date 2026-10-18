import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <Link href="/blog" className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Tech Insights
      </Link>

      <div className="space-y-3">
        <div className="text-xs text-emerald-400 font-bold uppercase tracking-wider">
          Safety & Device Preparation
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-white">
          How to Securely Wipe Your iPhone Before Selling in India (NIST 800-88 Standard)
        </h1>
        <div className="text-xs text-slate-500">Published by Sellbar Engineering • 4 min read</div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <p>
          Before handing your phone over to any buyer or trade-in executive, safeguarding your personal data—UPI apps, photos, banking tokens, and Apple Keychain logins—is your number one priority.
        </p>

        <h2 className="text-base font-bold text-white pt-2">Step 1: Backup to iCloud or PC</h2>
        <p>Ensure you have a recent full backup of your WhatsApp chats and iOS data.</p>

        <h2 className="text-base font-bold text-white pt-2">Step 2: Sign Out of iCloud & Find My</h2>
        <p>Go to Settings &gt; [Your Name] &gt; Sign Out. Turn off &quot;Find My iPhone&quot; to prevent Activation Lock issues.</p>

        <h2 className="text-base font-bold text-white pt-2">Step 3: Erase All Content & Settings</h2>
        <p>Go to Settings &gt; General &gt; Transfer or Reset iPhone &gt; Erase All Content and Settings. This triggers hardware cryptographic key disposal, rendering previous data unrecoverable.</p>
      </div>
    </div>
  );
}
