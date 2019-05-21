import mongoose from "mongoose"
import { User, Abstract } from "../../models"
import { UserInputError } from "apollo-server-express";
import {signOut, attemtSignIn} from '../../auth'

export default {
    Query:{
        current: (root, args, {req}, info)=>{
            return User.findById(req.session.userId)
        },
        users:(root, args, context, info)=>{
             return User.find()
        },
        user:(root, args, context, info)=>{

            if(!mongoose.Types.ObjectId.isValid(args.id)){
                    throw new UserInputError(`User ID is not a valid ObjectID`)
            }
            return User.findById(args.id)
        },
        reviewer:(root, args, {req}, info)=>{

            return User.findById(req.session.userId)

        },
        participant:(root, args, {req}, info)=>{

            return User.findById(req.session.userId)

        },
    },
    Mutation:{
        signUp: async(root, args, {req}, info)=>{
             //TODO: validation
             
             const user =  await User.create(args)
             req.session.userId = user.id
             req.session.role = user.role
             return user
            
        },
        signIn: async (root, {email, password}, {req}, info)=>{
             //TODO: validation

            const user = await attemtSignIn(email,password)
            req.session.userId= user.id
            req.session.role = user.role
            return user    

        },
        signOut: (root, args, {req, res}, info)=>{

              return signOut(req,res)
        }
    },
    Reviewer:{
        abstracts: (root, args, context, info) =>{
            const arr = Abstract.find({reviewer:root._id})            
            return arr
        }
    },
    Participant:{
        abstract: (root, args, context, info) =>{
            return Abstract.findOne({participant:root._id})  
        }
    }
}