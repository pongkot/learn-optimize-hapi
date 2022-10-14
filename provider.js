const provider = (h) => {
    // Repositorys
    const userRepository = h.UserRepository()

    // Services
    const appService = h.AppService({ userRepository })

    return { appService }
}

module.exports = provider
