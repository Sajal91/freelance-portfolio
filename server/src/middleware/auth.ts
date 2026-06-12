import type { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { env } from '../config/env.js'
import { User, type IUser } from '../models/User.js'

const COOKIE_NAME = 'token'

export interface AuthRequest extends Request {
  user?: IUser
}

interface JwtPayload {
  userId: string
}

export function signToken(userId: string) {
  return jwt.sign({ userId }, env.jwtSecret, { expiresIn: '7d' })
}

export function setAuthCookie(res: Response, token: string) {
  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,
    secure: env.nodeEnv === 'production',
    sameSite: env.nodeEnv === 'production' ? 'strict' : 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  })
}

export function clearAuthCookie(res: Response) {
  res.clearCookie(COOKIE_NAME, {
    httpOnly: true,
    secure: env.nodeEnv === 'production',
    sameSite: env.nodeEnv === 'production' ? 'strict' : 'lax',
  })
}

export async function requireAuth(req: AuthRequest, res: Response, next: NextFunction) {
  const token = req.cookies?.[COOKIE_NAME]

  if (!token) {
    res.status(401).json({ message: 'Authentication required' })
    return
  }

  try {
    const payload = jwt.verify(token, env.jwtSecret) as JwtPayload
    const user = await User.findById(payload.userId).select('-password')

    if (!user) {
      res.status(401).json({ message: 'User not found' })
      return
    }

    req.user = user
    next()
  } catch {
    res.status(401).json({ message: 'Invalid or expired session' })
  }
}

export async function optionalAuth(req: AuthRequest, _res: Response, next: NextFunction) {
  const token = req.cookies?.[COOKIE_NAME]

  if (token) {
    try {
      const payload = jwt.verify(token, env.jwtSecret) as JwtPayload
      const user = await User.findById(payload.userId).select('-password')
      if (user) req.user = user
    } catch {
      // ignore invalid token
    }
  }

  next()
}

export function toPublicUser(user: IUser) {
  return {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    role: user.role,
  }
}
