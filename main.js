const Hapi = require('@hapi/hapi')
const AppModule = require('./app.module')
const Logger = require('./common/logger')
const { createHapiToolkit } = require('./common/hapi-toolkit')
const UserModule = require('./modules/user/user.module')

const logger = Logger()
logger.setContext('Init')

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
    })
    const toolkit = createHapiToolkit(server)

    // Modules
    await toolkit.register(AppModule, UserModule)

    await server.start()
    logger.log(`Server running on ${server.info.uri}`)
}

process.on('unhandledRejection', (err) => {
    console.log(err)
    process.exit(1)
})

init()
