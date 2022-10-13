// const Logger = {
//     name: 'Logger',
//     version: '1.0.0',
//     register: (server) => {
//         const callback = () => {
//             let context = ''

//             const getContext = () => context

//             return {
//                 setContext: (ctx) => {
//                     context = ctx
//                 },
//                 log: (msg) =>
//                     console.log(`LOG   [acme-hapi-api] ${getContext()} ${msg}`),
//             }
//         }
//         server.decorate('toolkit', 'Logger', callback)
//     },
// }

const Logger = (name = 'acme-hapi-api') => {
    let context = ''

    const getContext = () => context

    return {
        setContext: (ctx) => {
            context = ctx
        },
        log: (msg) => console.log(`LOG   [${name}] ${getContext()} ${msg}`),
    }   
}

module.exports = Logger
