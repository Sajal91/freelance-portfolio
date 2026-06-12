export interface InquiryEmailPayload {
  name: string
  email: string
  service: string
  message: string
}

/** Stub email notification — swap for Resend/SendGrid later */
export async function sendInquiryNotification(payload: InquiryEmailPayload) {
  console.log('[email stub] New inquiry received:', JSON.stringify(payload, null, 2))
}

export async function sendVerificationEmail(email: string, _token: string) {
  console.log(`[email stub] Verification email would be sent to ${email}`)
}

export async function sendPasswordResetEmail(email: string, _token: string) {
  console.log(`[email stub] Password reset email would be sent to ${email}`)
}
