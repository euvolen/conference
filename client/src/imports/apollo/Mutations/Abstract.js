import gql from 'graphql-tag';

export const ADD_ABSTRACT = gql`
mutation AddAbstractMutation($title:String!,$body:String! ){
  addAbstract(title:$title, body:$body){
        id
        title
        body
    }
}
`
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