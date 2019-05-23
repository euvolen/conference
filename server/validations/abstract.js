import Joi from 'joi'

const title = Joi.string().min(10).max(200).required().label('Title')
const body = Joi.string().min(200).max(35000).required().label('Text')

export const addAbstract = Joi.object().keys({
    title, body
})
