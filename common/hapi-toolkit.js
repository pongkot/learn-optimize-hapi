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
        register: (server) => {
            for (const route of routes) {
                const { method, path, handler } = route
                server.route({ method, path, handler })
            }
        },
    }
}

const registerToolkitOnce = async (server, ...callbacks) => {
    for (const callback of callbacks) {
        await server.register(createDecorateToolkit(callback), { once: true })
    }
    return server
}

const registerRoute = async (server, ...callbacks) => {
    for (const callback of callbacks) {
        await server.register(createRoutePlugin(callback))
    }
    return server
}

const register = async (server, ...callbacks) => {
    for (const callback of callbacks) {
        await server.register(createPlugin(callback))
    }
    return server
}

const createRouter = () =>
    new (class createRouter {
        #routes = []
        #compose = {
            method: null,
            path: null,
            handler: null,
        }

        http(method, path) {
            this.#compose.method = method
            this.#compose.path = path
            return this
        }

        handler(callback) {
            this.#compose.handler = callback
            this.#routes.push(this.#compose)
            this.#compose = { method: null, path: null, handler: null }
        }

        getRoutes() {
            return this.#routes
        }
    })()

module.exports = { registerToolkitOnce, register, registerRoute, createRouter }
