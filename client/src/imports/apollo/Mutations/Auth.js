import gql from 'graphql-tag';

export const SIGN_IN = gql`
mutation SignInMutation($email:String!,$password:String! ){
  signIn(email:$email, password:$password){
        id
    }
}
`
export const SIGN_UP = gql`
mutation SignUpMutation($email:String!,$password:String!,$name:String! ){
  signUp(email:$email, password:$password, name:$name){
        id
    }
}
`