import {gql} from 'apollo-server-express'

export default gql`
    extend type Query {
        current: User @private
        user(id:ID!):User @private @authorized
        users:[User!]! @private @authorized
        reviewer(id:ID!): Reviewer! @private @review
        participant(id:ID!): Participant! @private 
    }
    extend type Mutation{
        signUp(email:String!, name:String!, password:String!,affilation:String!):User @public
        signIn (email:String!, password:String!): User @public
        signOut: Boolean @private
    }
    type User {
        id: ID!
        email: String!
        role:String!
        name:String!
        createdAt: String!
        updatedAt:String!
    }
    type Reviewer {
        id: ID!
        email: String!
        abstracts:[Review!]!
        name:String!
        createdAt: String!
        updatedAt:String!
    }
    type Participant {
        id: ID!
        email: String!
        abstract:Abstract!
        affilation:String!
        status:String!
        name:String!
        createdAt: String!
        updatedAt:String!
    }
  
`