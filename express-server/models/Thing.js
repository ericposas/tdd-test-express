import mongoose, { Schema } from 'mongoose'

const Thing = mongoose.model('Thing', new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
}))

export default Thing
