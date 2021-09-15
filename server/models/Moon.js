import mongoose from 'mongoose'

export const MoonSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2 },
  planetId: { type: mongoose.Schema.Types.ObjectId, ref: 'Planet' },
  moonId: { type: mongoose.Schema.Types.ObjectId }
}, { timestamps: true, toJSON: { virtuals: true } })
