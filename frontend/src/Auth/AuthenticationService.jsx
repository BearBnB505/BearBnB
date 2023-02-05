import axios from "axios";
import {token} from "mysql/lib/protocol/Auth";

export const USER_ID_SESSION_ATTRIBUTE_ID = 'authenticatedUser'

function AuthenticationService(props) {

}

export function executeJwtAuthenticationService(userId, userPwd) {
    return axios.post('/authenticate',
        {userId, userPwd}
    )
}

export function registerSuccessfulLoginForJwt(userId, token) {
    sessionStorage.setItem(USER_ID_SESSION_ATTRIBUTE_ID, userId);
    setupAxiosInterceptors(createJWTToken(token))
}

function createJWTToken(token) {
    return 'Bearer' + token;
}

function setupAxiosInterceptors(token) {
    axios.interceptors.request.use(
        (config) => {
            if (isUserLoggedIn()) {
                config.headers.authorization = token
            }
            return config
        }
    )
}


// export default AuthenticationService;