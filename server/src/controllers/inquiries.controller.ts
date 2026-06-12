import type { Request, Response } from 'express'
import { Inquiry } from '../models/Inquiry.js'
import { sendInquiryNotification } from '../services/email.service.js'

export async function createInquiry(req: Request, res: Response) {
  const { name, email, service, message } = req.body as {
    name?: string
    email?: string
    service?: string
    message?: string
  }

  if (!name?.trim() || !email?.trim() || !service?.trim() || !message?.trim()) {
    res.status(400).json({ message: 'All fields are required' })
    return
  }

  const inquiry = await Inquiry.create({
    name: name.trim(),
    email: email.toLowerCase().trim(),
    service: service.trim(),
    message: message.trim(),
  })

  await sendInquiryNotification({
    name: inquiry.name,
    email: inquiry.email,
    service: inquiry.service,
    message: inquiry.message,
  })

  res.status(201).json({ message: 'Inquiry received. We will respond within one working day.' })
}
