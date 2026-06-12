import bcrypt from 'bcryptjs'
import type { Response } from 'express'
import { User } from '../models/User.js'
import {
  clearAuthCookie,
  optionalAuth,
  setAuthCookie,
  signToken,
  toPublicUser,
  type AuthRequest,
} from '../middleware/auth.js'
import { sendPasswordResetEmail, sendVerificationEmail } from '../services/email.service.js'

export async function register(req: AuthRequest, res: Response) {
  const { name, email, password } = req.body as {
    name?: string
    email?: string
    password?: string
  }

  if (!name?.trim() || !email?.trim() || !password) {
    res.status(400).json({ message: 'Name, email, and password are required' })
    return
  }

  if (password.length < 8) {
    res.status(400).json({ message: 'Password must be at least 8 characters' })
    return
  }

  const existing = await User.findOne({ email: email.toLowerCase().trim() })
  if (existing) {
    res.status(409).json({ message: 'An account with this email already exists' })
    return
  }

  const hashed = await bcrypt.hash(password, 12)
  const user = await User.create({
    name: name.trim(),
    email: email.toLowerCase().trim(),
    password: hashed,
  })

  const token = signToken(user._id.toString())
  setAuthCookie(res, token)

  res.status(201).json({
    message: 'Account created',
    user: toPublicUser(user),
  })
}

export async function login(req: AuthRequest, res: Response) {
  const { email, password } = req.body as { email?: string; password?: string }

  if (!email?.trim() || !password) {
    res.status(400).json({ message: 'Email and password are required' })
    return
  }

  const user = await User.findOne({ email: email.toLowerCase().trim() })
  if (!user) {
    res.status(401).json({ message: 'Invalid email or password' })
    return
  }

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) {
    res.status(401).json({ message: 'Invalid email or password' })
    return
  }

  const token = signToken(user._id.toString())
  setAuthCookie(res, token)

  res.json({ user: toPublicUser(user) })
}

export function logout(_req: AuthRequest, res: Response) {
  clearAuthCookie(res)
  res.json({ message: 'Logged out' })
}

export function me(req: AuthRequest, res: Response) {
  if (!req.user) {
    res.status(401).json({ message: 'Not authenticated' })
    return
  }

  res.json({ user: toPublicUser(req.user) })
}

export async function verifyEmailStub(req: AuthRequest, res: Response) {
  const { email } = req.body as { email?: string }
  if (!email) {
    res.status(400).json({ message: 'Email is required' })
    return
  }
  await sendVerificationEmail(email, 'stub-token')
  res.json({ message: 'Verification email sent (stub)' })
}

export async function resetPasswordStub(req: AuthRequest, res: Response) {
  const { email } = req.body as { email?: string }
  if (!email) {
    res.status(400).json({ message: 'Email is required' })
    return
  }
  await sendPasswordResetEmail(email, 'stub-token')
  res.json({ message: 'Password reset email sent (stub)' })
}
