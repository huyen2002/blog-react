import { Link } from 'react-router-dom'
import { Paths } from '../routes/paths'
const Brand = () => {
  return (
    <Link to={Paths.HOME}>
      <div className="flex w-auto items-center justify-between">
        <img
          src="/logo.png"
          alt="logo"
          className="object-cover"
          width={80}
          height={80}
        />
        <h1 className="font-pacifico text-3xl not-italic leading-[7rem] text-black/80 md:text-4xl lg:text-5xl">
          Infinity
        </h1>
      </div>
    </Link>
  )
}
export default Brand
