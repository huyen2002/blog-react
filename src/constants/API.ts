export const AuthAPI = {
  LOGIN: '/auth/login',
  SIGN_UP: '/auth/signup',
  LOG_OUT: '/auth/logout',
}

export const TopicAPI = {
  GET_ALL: '/topic/all',
}

export const PostAPI = {
  GET_All: `/post/all`,
  GET_BY_ID: (id: any) => `post/${id}`,
  CREATE: '/post/create',
  EDIT: (id: any) => `/post/edit/${id}`,
  DELETE: (id: any) => `post/delete/${id}`,
  GET_BY_TOPIC: (id: any) => `post/byTopic/${id}`,
}

export const UserAPI = {
  GET_LISTS: () => '/read-list/all',
}

export const ReadListAPI = {
  CREATE: '/read-list/create',
  UPDATE: (id: any) => `/read-list/update/${id}`,
  ADD_POST: (id: any) => `/read-list/${id}/add-post`,
}
