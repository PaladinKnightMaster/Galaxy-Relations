import mongoose from 'mongoose'

export const StarSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2 },
  galaxyId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Galaxy' },
  starId: { type: mongoose.Schema.Types.ObjectId }
}, { timestamps: true, toJSON: { virtuals: true } })
