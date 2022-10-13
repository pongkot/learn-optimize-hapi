const AppController = require('./app.controller')
const AppService = require('./app.service')

const createDecorate = (callback) => {
    return {
        name: 'AppService',
        version: '1.0.0',
        register: (server) =>
            server.decorate('toolkit', 'AppService', callback),
    }
}
const decorate = createDecorate

const AppModule = {
    name: 'AppModule',
    version: '1.0.0',
    register: async (server) => {
        server.register(decorate(AppService), { once: true })
        server.register(AppController)
    },
}

module.exports = AppModule
