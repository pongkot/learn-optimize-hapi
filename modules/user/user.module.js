const { createHapiToolkit } = require('../../common/hapi-toolkit')
const UserController = require('./user.controller')
const UserRepository = require('./user.repository')
const UserService = require('./user.service')

const UserModule = async (server) => {
    const toolkit = createHapiToolkit(server)

    // Providers
    await toolkit.registerToolkitOnce(UserRepository, UserService)

    // Controller
    await toolkit.registerRoute(UserController)

    return server
}

module.exports = UserModule
