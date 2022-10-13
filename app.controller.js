const AppController = {
    name: 'AppController',
    version: '1.0.0',
    register: async (server) => {
        server.route({
            method: 'GET',
            path: '/',
            handler: (request, h) => {
                return h.appService().getHello('Pongkot')
            },
        })
    },
}

module.exports = AppController
