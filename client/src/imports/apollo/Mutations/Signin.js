import gql from 'graphql-tag';

export const SIGN_IN = gql`
mutation SignInMutation($email:String!,$password:String! ){
  signIn(email:$email, password:$password){
        id
    }
}
`