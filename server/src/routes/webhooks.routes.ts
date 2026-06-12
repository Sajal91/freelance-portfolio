import { Router } from 'express'
import express from 'express'
import * as webhooksController from '../controllers/webhooks.controller.js'

const router = Router()

router.post(
  '/stripe',
  express.raw({ type: 'application/json' }),
  webhooksController.handleStripeWebhook,
)

export default router
