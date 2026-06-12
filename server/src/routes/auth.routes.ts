import { Router } from 'express'
import * as authController from '../controllers/auth.controller.js'
import { optionalAuth } from '../middleware/auth.js'

const router = Router()

router.post('/register', authController.register)
router.post('/login', authController.login)
router.post('/logout', authController.logout)
router.get('/me', optionalAuth, authController.me)
router.post('/verify-email', authController.verifyEmailStub)
router.post('/reset-password', authController.resetPasswordStub)

export default router
