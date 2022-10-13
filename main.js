'use strict'

const Hapi = require('@hapi/hapi')
const AppModule = require('./app.module')
const Logger = require('./common/logger')

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
    })

    await server.register(Logger)
    await server.register(AppModule)

    await server.start()
    console.log('[acme-hapi-api]', 'Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
    console.log(err)
    process.exit(1)
})

init()
