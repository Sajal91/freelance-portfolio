import { Router } from 'express'
import * as checkoutController from '../controllers/checkout.controller.js'
import { requireAuth } from '../middleware/auth.js'

const router = Router()

router.post('/create-session', requireAuth, checkoutController.createCheckoutSession)

export default router
