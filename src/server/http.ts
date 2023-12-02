import axios from 'axios'
import { generateAuthorizationHeader } from '../utils/AuthUtils'

const http = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
    Authorization: generateAuthorizationHeader(),
  },
})
export default http
