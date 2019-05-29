import mongoose, { Schema } from 'mongoose'

const abstractSchema = new Schema({
    participant:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    title: String,
    body: String,
    keywords:[String],
    status:String,
    reviewer:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    isVerified: {
        type: Boolean
    }

}, {
        timestamps: true
    })
const Abstract = mongoose.model('abstracts', abstractSchema)

export default Abstract