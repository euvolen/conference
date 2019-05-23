import { SchemaDirectiveVisitor } from "apollo-server-express";
import {defaultFieldResolver} from 'graphql'
import {isReviewer} from '../../auth'

class ReviewDirective extends SchemaDirectiveVisitor{
    visitFieldDefinition(field){
        const {resolve = defaultFieldResolver} = field
        field.resolve = function (...args){
            const [,,context] = args

            isReviewer(context.req)

            return resolve.apply(this, args )
        }
    }
}
export default ReviewDirective