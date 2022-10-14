const UserRepository = require('./user.repository')
const UserService = require('./user.service')

describe('UserService', () => {
    let userService = undefined

    beforeEach(() => {
        userRepository = UserRepository()
        userService = UserService({ userRepository })
    })

    afterEach(() => {
        userService = undefined
    })

    it('should getUsers have gender', () => {
        const result = [
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
                name: 'anonymous',
            },
        ]
        jest.spyOn(userRepository, 'getUsers').mockImplementation(() => result)
        const want = [
            {
                id: 1,
                name: 'john doe',
                gender: 'male',
            },
            {
                id: 2,
                name: 'jane doe',
                gender: 'female',
            },
            {
                id: 3,
                name: 'anonymous',
                gender: 'n/a',
            },
        ]
        const given = userService.getUsers()
        expect(want).toStrictEqual(given)
    })
})
