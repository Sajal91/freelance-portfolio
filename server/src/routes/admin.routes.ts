import { Router } from 'express'
import * as adminController from '../controllers/admin.controller.js'
import { requireAuth } from '../middleware/auth.js'
import { requireAdmin } from '../middleware/admin.js'

const router = Router()

router.use(requireAuth, requireAdmin)
router.get('/inquiries', adminController.listInquiries)
router.get('/subscriptions', adminController.listSubscriptions)

export default router
