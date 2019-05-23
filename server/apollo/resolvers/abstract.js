import Joi from 'joi'
import {Abstract, User} from '../../models'
import {addAbstract} from '../../validations/'
export default {
    Mutation:{
        postAbstract: async (root, args, {req,res}, info)=>{
            await Joi.validate(args, addAbstract, {abortEarly:false})
            const {userId} = req.session
            const {title, body} = args 

            const userHasAbstract = (await Abstract.where('participant').in(userId).countDocuments())>0
            
            if(userHasAbstract){
                const abstract = await Abstract.findOneAndUpdate({participant:userId}, {title, body}) 
                return abstract
            }
            else{
                const abstract = await Abstract.create({title, body, participant:userId})
                await User.findOneAndUpdate({_id:userId}, {abstract:abstract._id}) 
                return abstract
            }
           
        },
        verifyAbstract: async (root, args, {req,res}, info)=>{
            const {id} = args 
            const abstract = await Abstract.findOneAndUpdate({id}, {isVerified:true}) 
            return abstract
           
        },

    },
   Abstract:{
        participant: async (root, args, {req,res}, info)=>{
            return (await root.populate('participant').execPopulate()).participant
        }
   }
}
