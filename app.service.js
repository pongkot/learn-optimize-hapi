const Logger = require('./common/logger')

const logger = Logger()
logger.setContext('AppService')

const AppService = ({ userService }) => {
    return {
        getHello: (name) => {
            logger.log(`Hello, ${name}!`)
            return `Hello, ${name}!`
        },
        listUser: () => {
            return userService.getUsers()
        },
    }
}

module.exports = AppService
