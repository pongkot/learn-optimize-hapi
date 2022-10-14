const Logger = require('./logger')

const logger = Logger()

const createDecorateToolkit = (callback, version = '1.0.0') => {
    const name = callback.name
    return {
        name,
        version,
        register: (server) => {
            server.decorate('toolkit', name, callback)
        },
    }
}

const createPlugin = (callback, version = '1.0.0') => {
    const name = callback.name
    return {
        name,
        version,
        register: callback,
    }
}

const createRoutePlugin = (callback, version = '1.0.0') => {
    const name = callback.name
    const cb = callback()
    const routes = cb.getRoutes()
    return {
        name,
        version,
        // TODO implement map auth
        register: (server) => {
            for (const route of routes) {
                const { method, path, handler, options } = route
                server.route({ method, path, handler, options })
            }
        },
    }
}

class CreateRoute {
    #routes = []
    #compose = {
        name: null,
        method: null,
        path: null,
        handler: null,
        options: {
            validate: null,
        },
    }

    name(context) {
        this.#compose.name = context
        return this
    }

    http(method, path) {
        this.#compose.method = method
        this.#compose.path = path
        return this
    }

    validate(joi) {
        this.#compose.options.validate = joi()
        return this
    }

    handler(callback) {
        this.#compose.handler = callback
        this.#routes.push(this.#compose)
        this.#compose = {
            method: null,
            path: null,
            handler: null,
            options: {
                validate: null,
            },
        }
    }

    getRoutes() {
        return this.#routes
    }
}

const createRouter = () => new CreateRoute()

const createHapiToolkit = (server) => {
    logger.setContext('CreateHapiToolkit')
    return {
        registerToolkitOnce: async (...callbacks) => {
            for (const callback of callbacks) {
                const name = callback.name
                logger.log(`Register toolkit once ${name}`)
                await server.register(createDecorateToolkit(callback), {
                    once: true,
                })
            }
            return server
        },
        register: async (...callbacks) => {
            for (const callback of callbacks) {
                const name = callback.name
                logger.log(`Register ${name}`)
                await server.register(createPlugin(callback))
            }
            return server
        },
        registerRoute: async (...callbacks) => {
            for (const callback of callbacks) {
                const name = callback.name
                logger.log(`Register route ${name}`)
                await server.register(createRoutePlugin(callback))
            }
            return server
        },
    }
}

module.exports = { createHapiToolkit, createRouter }
