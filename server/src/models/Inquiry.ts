import mongoose, { Schema, type Document } from 'mongoose'

export interface IInquiry extends Document {
  name: string
  email: string
  service: string
  message: string
}

const inquirySchema = new Schema<IInquiry>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    service: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true },
)

export const Inquiry = mongoose.model<IInquiry>('Inquiry', inquirySchema)
