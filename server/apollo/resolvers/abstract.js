import {Abstract} from '../../models'

export default {
    Mutation:{
        postAbstract: async (root, args, {req,res}, info)=>{
             //TODO: validation
            const {userId} = req.session
            const {title, body} = args 
            const abstract = await Abstract.create({title, body, participant:userId})
          
           return abstract
        }
    },
   Abstract:{
        participant: async (root, args, {req,res}, info)=>{
            return (await root.populate('participant').execPopulate()).participant
        }
   }
}
