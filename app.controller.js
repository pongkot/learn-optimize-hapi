const { createRouter } = require('./common/hapi-toolkit')
const provider = require('./provider')

const AppController = (router = createRouter()) => {
    router
        .name('getHello')
        .http('GET', '/')
        .handler((request, h) => {
            const { appService } = provider(h)
            return appService.getHello('Pongkot')
        })
    return router
}

module.exports = AppController
