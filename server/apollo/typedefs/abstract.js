import {gql} from 'apollo-server-express'

export default gql`
    extend type Query{
        reviews:[Review!]! @private @review
        abstract: Abstract! @private 
    }
     extend type Mutation{
        postAbstract(title:String!, body:String!):Abstract! @private
        verifyAbstract(id:String!):Review! @private @review
    }
    type Abstract {
        id: ID!
        title:String!
        body:String!
        participant: User!
        createdAt: String!
        updatedAt:String!
    }
    type Review {
        id: ID!
        title:String!
        body:String!
        isVerified:Boolean
        createdAt: String!
        updatedAt:String!
    }
`