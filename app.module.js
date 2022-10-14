const { createHapiToolkit } = require('./common/hapi-toolkit')
const AppController = require('./app.controller')
const AppService = require('./app.service')
const UserRepository = require('./modules/user/user.repository')

const AppModule = async (server) => {
    const toolkit = createHapiToolkit(server)

    // Providers
    await toolkit.registerToolkitOnce(UserRepository, AppService)

    // Controller
    await toolkit.registerRoute(AppController)

    return server
}

module.exports = AppModule
