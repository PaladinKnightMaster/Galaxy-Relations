import mongoose from 'mongoose'
import { Value as ValueSchema } from '../models/Value'
import { AccountSchema } from '../models/Account'
import { StarSchema } from '../models/Star.js'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Galaxy = mongoose.model('Galaxy', AccountSchema);

  Star = mongoose.model('Star', StarSchema)
}

export const dbContext = new DbContext()
