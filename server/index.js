import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import typeDefs from './apollo/typeDefs'
import resolvers from './apollo/resolvers'
import * as db from './db/db-connect'
import session from './db/sessions'
import schemaDirectives from './apollo/directives'
import {APP_PORT,IN_PROD} from './configs/keys'

db.connect().then(()=>{

  const app = express()

  app.disable('x-powered-by')
  app.use(session)
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    schemaDirectives,
    playground: IN_PROD ? false: {
        settings:{
            "request.credentials":'include'
        }
    },
    context: ({req, res})=>({req,res})
})
server.applyMiddleware({ app , cors:false})
app.listen({ port: APP_PORT }, () => {
    console.log(`Server ready at http://localhost:${APP_PORT}${server.graphqlPath}`)
})
}).catch(err =>{
    console.error(err)
})