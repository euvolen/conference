import gql from 'graphql-tag';

// @private
// return User
export const CURRENT = gql`
query CurrentUserQuery{
  current{
        id
    }
}
`
// @authorized  @private
// return User
export const USER = gql`
query UserQuery($id:String!){
  user(id:$id){
        id
        email
        role
        name
    }
}
`
// @authorized  @private
// return [User]
export const USERS = gql`
query UsersQuery{
  users{
        id
        email
        role
        name
    }
}
`
// @review  @private
// return Reviewer
export const REVIEWER = gql`
query ReviewerQuery($id:String!){
  reviewer(id:$id){
        id
        abstracts{
          id
          title
          body
          isVerified
        }
        name
    }
}
`
//  @private
// return Participant
export const PARTICIPANT = gql`
query ParticipantQuery($id:String!){
  participant(id:$id){
        id
        abstract{
          id
          title
          body
        }
        affilation
        status
        name
    }
}
`