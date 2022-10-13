const AppController = require('./app.controller')
const AppService = require('./app.service')

const AppModule = {
    name: 'AppModule',
    version: '1.0.0',
    register: async (server) => {
        server.register(AppService, { once: true })
        server.register(AppController)
    },
}

module.exports = AppModule
