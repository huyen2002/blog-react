import { LoadingButton } from '@mui/lab'
import { ReactNode, useState } from 'react'

const HandlerLoadingButton = ({
  color,
  size,
  varient,
  onClick,
  children,
}: {
  color: any
  size: string
  varient: string
  onClick: () => void
  children: ReactNode
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleClick = async () => {
    try {
      setIsLoading(true)
      await onClick()
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <LoadingButton
      size={size as any}
      variant={varient as any}
      onClick={handleClick}
      loading={isLoading}
      color={color}
    >
      {children}
    </LoadingButton>
  )
}
export default HandlerLoadingButton
