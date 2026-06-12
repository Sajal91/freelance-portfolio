import { Router } from 'express'
import * as subscriptionsController from '../controllers/subscriptions.controller.js'
import { requireAuth } from '../middleware/auth.js'

const router = Router()

router.get('/me', requireAuth, subscriptionsController.getMySubscriptions)

export default router
