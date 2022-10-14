const UserService = ({ userRepository }) => {
    return {
        getUsers: () => {
            const users = userRepository.getUsers()
            return users.map((user) => {
                user.gender = 'n/a'
                if (['john doe'].includes(user.name)) {
                    user.gender = 'male'
                }
                if (['jane doe'].includes(user.name)) {
                    user.gender = 'female'
                }
                return user
            })
        },
    }
}

module.exports = UserService
