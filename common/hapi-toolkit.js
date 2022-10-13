// const callback = () => {
//     let context = ''

//     const getContext = () => context

//     return {
//         setContext: (ctx) => {
//             context = ctx
//         },
//         log: (msg) =>
//             console.log(`[acme-hapi-api] ${getContext()} ${msg}`),
//     }
// }

const createDecorate = (callback, version = '1.0.0') => {
    const name = callback.name
    return {
        name,
        version,
        register: (server) => {
            server.decorate('toolkit', name, callback)
        },
    }
}

module.exports = createDecorate