const mockJs = require('mockjs')
const userList = mockJs.mock({
    "data|100": [{
        name: '@cname',
        "id|+1": 1,
        date: "@date",
        address:'@zip',
        // avatar:"@dataImage"
    }]
})

module.exports = [
    {
        method: 'post',
        url: '/api/users',
        response: ({ body }) => {
            return {
                code: 200,
                msg: 'success',
                data: userList
            }
        }
    }
]