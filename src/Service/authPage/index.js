import { apiConfig } from "../../config";
import { fetchApi } from "../fetch";

export const signIn = async (payload) => {
    try {
        const response = await fetchApi({
            url: `${apiConfig.serverEndPoint}/auth/sign-in`,
            method: 'PUT',
            payload,
            isAuthorizationReq: false,
        })
        const {token, ...rest} = response
        sessionStorage.setItem('token', token)
        return rest
    }
    catch (error) {
        console.error(error)
    }
}

export const createUser = async (payload) => {
    try {
        const response = await fetchApi({
            url: `${apiConfig.serverEndPoint}/auth/create-user`,
            method: 'POST',
            payload,
            isAuthorizationReq: false,
        })
        return response
    }
    catch (error) {
        console.error(error)
    }
}