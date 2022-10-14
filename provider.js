const provider = (h) => {
    // Repositorys
    const userRepository = h.UserRepository()

    // Services
    const userService = h.UserService({ userRepository })
    const appService = h.AppService({ userService })

    return { appService }
}

module.exports = provider
