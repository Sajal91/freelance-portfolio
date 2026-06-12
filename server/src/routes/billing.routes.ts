import { Router } from 'express'
import * as billingController from '../controllers/billing.controller.js'
import { requireAuth } from '../middleware/auth.js'

const router = Router()

router.post('/portal', requireAuth, billingController.createBillingPortalSession)

export default router
