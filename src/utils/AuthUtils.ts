export const generateAuthorizationHeader = () => {
  const authToken = localStorage.getItem('accessToken')
  const tokenType = localStorage.getItem('tokenType')
  console.log(tokenType)
  return tokenType + ' ' + authToken
}

export const isAuthorized = () => {
  return localStorage.getItem('accessToken') !== null
}
