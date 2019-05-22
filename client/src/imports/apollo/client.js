import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';

const link = createHttpLink({
  uri:'/graphql'
})
const client = new ApolloClient({
    cache:new InMemoryCache(),
    link
  })

export default client  