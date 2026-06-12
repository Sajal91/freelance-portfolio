import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { connectDB } from './config/db.js'
import { env } from './config/env.js'
import { errorHandler } from './middleware/errorHandler.js'
import authRoutes from './routes/auth.routes.js'
import productsRoutes from './routes/products.routes.js'
import checkoutRoutes from './routes/checkout.routes.js'
import subscriptionsRoutes from './routes/subscriptions.routes.js'
import billingRoutes from './routes/billing.routes.js'
import inquiriesRoutes from './routes/inquiries.routes.js'
import webhooksRoutes from './routes/webhooks.routes.js'
import adminRoutes from './routes/admin.routes.js'

const app = express()

app.use(
  cors({
    origin: env.clientUrl,
    credentials: true,
  }),
)

// Stripe webhooks need raw body — mount before express.json()
app.use('/api/webhooks', webhooksRoutes)

app.use(express.json())
app.use(cookieParser())

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/auth', authRoutes)
app.use('/api/products', productsRoutes)
app.use('/api/checkout', checkoutRoutes)
app.use('/api/subscriptions', subscriptionsRoutes)
app.use('/api/billing', billingRoutes)
app.use('/api/inquiries', inquiriesRoutes)
app.use('/api/admin', adminRoutes)

app.use(errorHandler)

async function start() {
  await connectDB()
  app.listen(env.port, () => {
    console.log(`Server running on http://localhost:${env.port}`)
  })
}

start().catch((err) => {
  console.error('Failed to start server:', err)
  process.exit(1)
})
