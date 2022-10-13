const { createRouter } = require('./common/hapi-toolkit')

const getAppService = (h) => h.AppService()

const AppController = (router = createRouter()) => {
    router.http('GET', '/').handler(async (request, h) => {
        const appService = getAppService(h)
        return appService.getHello('Pongkot')
    })

    return router
}

module.exports = AppController
