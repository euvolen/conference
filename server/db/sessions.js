import session from  'express-session'
import connectMongo from 'connect-mongo'
import {
    IN_PROD,
    DB_USERNAME,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME,
    SESS_LIFETIME,
    SESS_NAME,
    SESS_SECRET
} from '../configs/keys'

const MongoStore = connectMongo(session)

const store = new MongoStore({
    url:`mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
 })

 const newSession = session({
    store: store,
    name: SESS_NAME,
    secret:SESS_SECRET,
    resave:true,
    rolling:true,
    saveUninitialized:false,
    cookie:{
        maxAge: parseInt(SESS_LIFETIME),
        sameSite:true,
        secure: IN_PROD
    }
 })

 export default newSession