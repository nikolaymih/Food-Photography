import * as utils from '../utils/isLoggedIn';

export const isAuthenticated = isAuth => {
    let token = localStorage.getItem('token');
    if (token) {
        utils.isLoggedIn(token)
            .then(res => {
                token = res
                console.log(token);
                return token
            })
    }
    return false
}