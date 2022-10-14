const Joi = require('joi')

const CreateUserDto = () => {
    return {
        payload: Joi.object({
            name: Joi.string().min(3).max(144).required(),
            gender: Joi.string().valid(...['m', 'f']), // isIn()
        }),
    }
}

module.exports = CreateUserDto
