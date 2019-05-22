import gql from 'graphql-tag';

export const CURRENT = gql`
query CurrentUserQuery{
  current{
        id
    }
}
`
