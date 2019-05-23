import gql from 'graphql-tag';

export const CURRENT = gql`
query CurrentUserQuery{
  current{
        id
    }
}
`
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