const Logger = (appName = 'acme-hapi-api') => {
    let context = ''

    const getContext = () => context

    return {
        setContext: (ctx) => {
            context = ctx
        },
        log: (msg) =>
            console.log(`[${appName}] LOG   [${getContext()}] ${msg}`),
        debug: () => {},
        verbose: () => {},
        info: () => {},
    }
}

module.exports = Logger
