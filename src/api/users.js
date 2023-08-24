import  service from  '@utils/request.js'

export const getUserList = () => {
    return service({
        url:'/api/users',
        method:'post',
       
    })
}
