const { createHapiToolkit } = require('../../common/hapi-toolkit')
const UserRepository = require('./user.repository')
const UserService = require('./user.service')

const UserModule = async (server) => {
    const toolkit = createHapiToolkit(server)

    // Providers
    await toolkit.registerToolkitOnce(UserRepository, UserService)

    return server
}

module.exports = UserModule
