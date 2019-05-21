import {gql} from 'apollo-server-express'

export default gql`
     extend type Mutation{
        postAbstract(title:String!, body:String!):Abstract! @private
    }
    type Abstract {
        id: ID!
        title:String!
        body:String!
        participant: User!
        createdAt: String!
        updatedAt:String!
    }
`