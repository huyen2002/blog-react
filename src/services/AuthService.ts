import { HttpStatusCode } from 'axios'
import http from '../server/http'
import { AuthAPI } from '../constants/API'

export const AuthService = {
  login: async (data: any) => {
    const response = (await http.post(AuthAPI.LOGIN, data)).data
    console.log('response', response)
    if (response.code === HttpStatusCode.Ok) {
      localStorage.setItem('accessToken', response.data.accessToken)
      localStorage.setItem('tokenType', response.data.tokenType)
    }
    return response
  },
  signup: async (data: any) => {
    return (await http.post(AuthAPI.SIGN_UP, data)).data
  },
}
