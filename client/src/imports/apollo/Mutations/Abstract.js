import gql from 'graphql-tag';

// @private
// return Abstract
export const ADD_ABSTRACT = gql`
mutation AddAbstractMutation($title:String!,$body:String! ){
  addAbstract(title:$title, body:$body){
        id
        title
        body
    }
}
`
//  @private && @review
// Return Review
export const VERIFY_ABSTRACT = gql`
mutation VerifyAbstractMutation($email:String!,$password:String!,$name:String! ){
    VerifyAbstract{
        id
        title
        body
        isVerified
    }
}
`