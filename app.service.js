const AppService = {
    name: 'AppService',
    version: '1.0.0',
    register: (server) => {
        server.decorate('toolkit', 'appService', () => {
            return {
                getHello: (name) => `Hello, ${name}!`,
            }
        })
    },
}

module.exports = AppService
