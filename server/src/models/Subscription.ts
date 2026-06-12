import mongoose, { Schema, type Document, type Types } from 'mongoose'

export interface ISubscription extends Document {
  userId: Types.ObjectId
  productSlug: string
  tier: string
  stripeSubscriptionId: string
  stripeCustomerId: string
  status: string
  currentPeriodEnd?: Date
}

const subscriptionSchema = new Schema<ISubscription>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    productSlug: { type: String, required: true },
    tier: { type: String, required: true },
    stripeSubscriptionId: { type: String, required: true, unique: true },
    stripeCustomerId: { type: String, required: true },
    status: { type: String, required: true },
    currentPeriodEnd: { type: Date },
  },
  { timestamps: true },
)

export const Subscription = mongoose.model<ISubscription>('Subscription', subscriptionSchema)
