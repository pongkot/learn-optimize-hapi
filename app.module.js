const toolkit = require('./common/hapi-toolkit')
const AppController = require('./app.controller')
const AppService = require('./app.service')

const AppModule = async (server) => {
    // Providers
    await toolkit.registerToolkitOnce(server, AppService)

    // Controller
    await toolkit.registerRoute(server, AppController)

    return server
}

module.exports = AppModule
