const getAppService = (h) => h.AppService({ logger: h.Logger() })

const AppController = {
    name: 'AppController',
    version: '1.0.0',
    register: async (server) => {
        server.route({
            method: 'GET',
            path: '/',
            handler: async (request, h) => {
                const appService = getAppService(h)
                return appService.getHello('Pongkot')
            },
        })
    },
}

module.exports = AppController
