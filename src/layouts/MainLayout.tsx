import { ReactNode } from 'react'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen max-w-full bg-white">
      <div className="mx-5 h-screen max-w-full bg-white md:mx-16 xl:mx-32">
        {children}
      </div>
    </div>
  )
}
export default MainLayout
