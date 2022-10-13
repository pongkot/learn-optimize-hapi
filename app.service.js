const AppService = ({ logger }) => {
    logger.setContext('AppService')
    return {
        getHello: (name) => {
            logger.log(`Hello, ${name}!`)
            return `Hello, ${name}!`
        },
    }
}

module.exports = AppService
