import { Router } from 'express'
import * as inquiriesController from '../controllers/inquiries.controller.js'

const router = Router()

router.post('/', inquiriesController.createInquiry)

export default router
