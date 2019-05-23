import gql from 'graphql-tag';

// @private
// return Abstract
export const ABSTRACT = gql`
query AbstractQuery{
  abstract{
        id
        title
        body
    }
}
`
// @private
// return [Review]
export const REVIEWS = gql`
query ReviewsQuery{
  reviews{
        id
        title
        body
        isVerified
    }
}
`