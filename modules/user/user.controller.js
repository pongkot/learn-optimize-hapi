const { createRouter } = require('../../common/hapi-toolkit')
const Logger = require('../../common/logger')
const CreateUserDto = require('./dto/create-user.dto')

const logger = Logger()
logger.setContext('UserController')

const UserController = (router = createRouter()) => {
    router
        .name('createUser')
        .http('POST', '/users')
        .validate(CreateUserDto)
        .handler(async (request) => {
            const { payload } = request
            logger.log(`params: ${JSON.stringify(payload)}`)
            return 'OK'
        })
    return router
}

module.exports = UserController
