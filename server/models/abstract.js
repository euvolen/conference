import mongoose, { Schema } from 'mongoose'

const abstractSchema = new Schema({
    participant:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    title: String,
    body: String,
    reviewer:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    isVerified: {
        type: Boolean,
        default: false
    }

}, {
        timestamps: true
    })
const Abstract = mongoose.model('abstracts', abstractSchema)

export default Abstract