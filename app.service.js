const Logger = require('./common/logger')

const logger = Logger()
logger.setContext('AppService')

const AppService = () => {
    return {
        getHello: (name) => {
            logger.log(`Hello, ${name}!`)
            return `Hello, ${name}!`
        },
    }
}

module.exports = AppService
