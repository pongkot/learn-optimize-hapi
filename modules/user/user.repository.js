const UserRepository = () => {
    return {
        getUsers: () => {
            return [
                {
                    id: 1,
                    name: 'john doe',
                },
                {
                    id: 2,
                    name: 'jane doe',
                },
                {
                    id: 3,
                    name: 'foo bar',
                },
            ]
        },
    }
}

module.exports = UserRepository
