'use strict'

const Hapi = require('@hapi/hapi')
const AppModule = require('./app.module')
const Logger = require('./common/logger')
const toolkit = require('./common/hapi-toolkit')

const logger = Logger()
logger.setContext('Init')

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
    })

    // Modules
    await toolkit.register(server, AppModule)

    await server.start()
    logger.log(`Server running on ${server.info.uri}`)
}

process.on('unhandledRejection', (err) => {
    console.log(err)
    process.exit(1)
})

init()
