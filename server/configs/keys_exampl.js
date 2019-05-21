export  const {
    APP_PORT = 4000,
    NODE_ENV = 'development',
    DB_USERNAME = 'username',
    DB_PASSWORD = 'password',
    DB_HOST = 'host.com',
    DB_PORT = '123456',
    DB_NAME = 'db-name',
    SESS_NAME = 'sid',
    SESS_SECRET = 'shh!secret!',
    SESS_LIFETIME = 2 * 60 * 60  * 1000 ,
} = process.env
export const IN_PROD = NODE_ENV === 'production' 
