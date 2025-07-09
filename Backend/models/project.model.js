import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    unique: true
  },
  user:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    }
  ],
})

const project = mongoose.model('project', projectSchema)
export default project