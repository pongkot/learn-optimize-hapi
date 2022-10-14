const { createRouter } = require('../../common/hapi-toolkit')
const Logger = require('../../common/logger')
const provider = require('../../provider')
const CreateUserDto = require('./dto/create-user.dto')

const logger = Logger()
logger.setContext('UserController')

const UserController = (router = createRouter('users')) => {
    router
        .name('listUser')
        .http('GET', '/')
        .handler((request, h) => {
            const { appService } = provider(h)
            return appService.listUser()
        })
    router
        .name('createUser')
        .http('POST', '/')
        .validate(CreateUserDto)
        .handler(async (request) => {
            const { payload } = request
            logger.log(`params: ${JSON.stringify(payload)}`)
            return 'OK'
        })
    return router
}

module.exports = UserController
