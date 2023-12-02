import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'
import PostsPage from '../pages/post/PostsPage'
import SignIn from '../pages/auth/SignIn'
import SignUp from '../pages/auth/SignUp'
import { Paths } from './paths'
import PostDetail from '../pages/post/PostDetail'

const routers = [
  {
    path: Paths.HOME,
    component: HomePage,
    layout: MainLayout,
  },
  {
    path: Paths.POSTS,
    component: PostsPage,
    layout: MainLayout,
  },
  {
    path: Paths.POST_DETAIL,
    component: PostDetail,
    layout: MainLayout,
  },
  {
    path: Paths.SIGN_UP,
    component: SignUp,
    layout: MainLayout,
  },
  {
    path: Paths.SIGN_IN,
    component: SignIn,
    layout: MainLayout,
  },
]
export default routers
