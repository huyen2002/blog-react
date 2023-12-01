import { Link, useNavigate } from 'react-router-dom'
import Brand from '../components/Brand'
import { Paths } from '../routes/paths'
const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <main>
        <div className="flex h-28 items-center justify-between">
          <Brand />
          <div className="items-center justify-between font-montserrat flex w-80">
            <button className="text-base font-normal md:text-lg xl:text-xl">
              <Link to={Paths.SIGN_IN}>Sign in</Link>
            </button>
            <button className="rounded-full bg-button px-3 py-2 text-base font-normal text-white md:text-lg lg:px-5 xl:text-xl">
              <Link to={Paths.SIGN_UP}>Sign up</Link>
            </button>
          </div>
        </div>
      </main>
      <div className="flex h-[calc(100vh-7rem)] max-w-full items-center pb-20 ">
        <div className="">
          <div className="w-2/5">
            <span className=" text-3xl font-bold text-black/80 sm:text-5xl lg:text-7xl">
              Growing unstoppably
              {/* <AuthShowcase /> */}
            </span>
          </div>

          <span className="mt-5 inline-block font-montserrat text-lg font-normal text-black/80 sm:mt-10 sm:text-xl lg:text-2xl">
            Discover stories and expand your knowledge about more fields
          </span>
        </div>
      </div>
    </div>
  )
}
export default HomePage
