import { IconPack, library } from '@fortawesome/fontawesome-svg-core'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import routers from './routes'
// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(far as IconPack, fas as IconPack, fab as IconPack)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routers.map((route, index) => {
          const Layout = route.layout
          const Page = route.component
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            ></Route>
          )
        })}
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        rtl={false}
      />
    </BrowserRouter>
  )
}

export default App
