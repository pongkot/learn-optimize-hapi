const Logger = require('./common/logger')

const logger = Logger()
logger.setContext('AppService')

const AppService = ({ userRepository }) => {
    return {
        getHello: (name) => {
            logger.log(`Hello, ${name}!`)
            return `Hello, ${name}!`
        },
        listUser: () => {
            return userRepository.getUsers()
        },
    }
}

module.exports = AppService
