import mongoose from 'mongoose'

export const PlanetSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2 },
  starId: { type: mongoose.Schema.Types.ObjectId, ref: 'Star' },
  planetId: { type: mongoose.Schema.Types.ObjectId }
}, { timestamps: true, toJSON: { virtuals: true } })
