import dotenv from 'dotenv'

dotenv.config()

function requireEnv(key: string, optional = false): string {
  const value = process.env[key]
  if (!value && !optional) {
    console.warn(`Warning: ${key} is not set`)
    return ''
  }
  return value ?? ''
}

export const env = {
  port: Number(process.env.PORT) || 3001,
  mongodbUri: requireEnv('MONGODB_URI'),
  jwtSecret: requireEnv('JWT_SECRET') || 'dev-jwt-secret-change-me',
  clientUrl: requireEnv('CLIENT_URL') || 'http://localhost:5173',
  stripeSecretKey: requireEnv('STRIPE_SECRET_KEY', true),
  stripeWebhookSecret: requireEnv('STRIPE_WEBHOOK_SECRET', true),
  nodeEnv: process.env.NODE_ENV ?? 'development',
}

export function isStripeConfigured() {
  return Boolean(env.stripeSecretKey)
}
