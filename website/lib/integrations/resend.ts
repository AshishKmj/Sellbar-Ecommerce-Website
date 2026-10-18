// Sellbar.in - Resend Email Integration
// Sends transactional notifications: Order confirmation, GST invoices, and pickup updates

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Sellbar Orders <orders@sellbar.in>';

export interface SendEmailPayload {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: SendEmailPayload): Promise<{ success: boolean; id?: string }> {
  if (!RESEND_API_KEY) {
    console.info(`[Resend Sandbox] Email to ${to} | Subject: "${subject}"`);
    return { success: true, id: `mock_email_${Date.now()}` };
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to,
        subject,
        html,
      }),
    });

    const data = await res.json();
    return { success: res.ok, id: data.id };
  } catch (err: any) {
    console.error('[Resend Error]:', err?.message);
    return { success: false };
  }
}

/**
 * Send Refurbished Product Order Confirmation Email
 */
export async function sendOrderConfirmationEmail(to: string, order: {
  id: string;
  customerName: string;
  totalAmount: number;
  items: Array<{ title: string; price: number; quantity: number }>;
  trackingNumber: string;
}) {
  const itemsHtml = order.items
    .map(
      (it) => `
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${it.title}</td>
        <td style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: center;">${it.quantity}</td>
        <td style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: right;">₹${it.price.toLocaleString('en-IN')}</td>
      </tr>`
    )
    .join('');

  const html = `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8" /></head>
    <body style="font-family: Arial, sans-serif; background-color: #f8fafc; padding: 24px; color: #1e293b;">
      <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
        <div style="background: #0f172a; padding: 24px; text-align: center; color: #ffffff;">
          <h1 style="margin: 0; font-size: 24px; font-weight: bold;">Sell<span style="color: #34d399;">bar</span>.in</h1>
          <p style="margin: 4px 0 0 0; font-size: 12px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Sell Smart. Buy Better.</p>
        </div>
        <div style="padding: 32px 24px;">
          <h2 style="color: #059669; margin-top: 0;">Order Confirmed! 🎉</h2>
          <p>Hi <strong>${order.customerName}</strong>,</p>
          <p>Thank you for shopping at Sellbar.in. We have received your order <strong>#${order.id}</strong>. Your certified refurbished device has entered final 32-point QC and sanitization.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 24px 0;">
            <thead>
              <tr style="background: #f1f5f9; text-align: left; font-size: 13px;">
                <th style="padding: 8px;">Item</th>
                <th style="padding: 8px; text-align: center;">Qty</th>
                <th style="padding: 8px; text-align: right;">Price</th>
              </tr>
            </thead>
            <tbody>${itemsHtml}</tbody>
            <tfoot>
              <tr>
                <td colspan="2" style="padding: 12px 8px; font-weight: bold; text-align: right;">Total (incl. GST):</td>
                <td style="padding: 12px 8px; font-weight: bold; text-align: right; color: #059669; font-size: 16px;">₹${order.totalAmount.toLocaleString('en-IN')}</td>
              </tr>
            </tfoot>
          </table>

          <div style="background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
            <p style="margin: 0; font-size: 13px; color: #64748b;">Tracking ID: <strong>${order.trackingNumber}</strong></p>
            <p style="margin: 4px 0 0 0; font-size: 12px; color: #64748b;">Courier Partner: Bluedart / Delhivery / Shiprocket</p>
          </div>

          <p style="font-size: 13px; color: #64748b; line-height: 1.5;">Every device includes our <strong>6-Month Comprehensive Warranty</strong> and <strong>7-Day Replacement Guarantee</strong>.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  return sendEmail({
    to,
    subject: `Order Confirmed: #${order.id} - Sellbar.in`,
    html,
  });
}
