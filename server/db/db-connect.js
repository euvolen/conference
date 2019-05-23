import {
    DB_USERNAME,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME
} from '../configs/keys'
import mongoose from 'mongoose'

export const connect = () => {
    return new Promise((resolve, reject) => {mongoose.connect(`mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {useNewUrlParser:true, useFindAndModify:false})
    .then((res, err) => {
        if(err) return reject(err)
        console.log(`DB ${DB_NAME} connected`)
        resolve();
    })
})
}
export const close = () => {
    return new Promise((resolve, reject) => {mongoose.disconnect()
    .then((res, err) => {
        if(err) return reject(err)
        console.log(`DB ${DB_NAME} disconnected`)
        resolve();
    })
})
}