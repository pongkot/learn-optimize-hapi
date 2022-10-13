const { createRouter } = require('./common/hapi-toolkit')
const provider = require('./provider')

const AppController = (router = createRouter()) => {
    router.http('GET', '/').handler(async (request, h) => {
        const { appService } = provider(h)
        return appService.getHello('Pongkot')
    })
    return router
}

module.exports = AppController
