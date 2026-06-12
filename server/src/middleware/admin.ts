import type { Response, NextFunction } from 'express'
import type { AuthRequest } from './auth.js'

export function requireAdmin(req: AuthRequest, res: Response, next: NextFunction) {
  if (!req.user || req.user.role !== 'admin') {
    res.status(403).json({ message: 'Admin access required' })
    return
  }
  next()
}
