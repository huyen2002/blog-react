import { LoadingButton } from '@mui/lab'
import { ReactNode, useState } from 'react'
import { toast } from 'react-toastify'

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
    } catch (e: any) {
      console.log(e)
      toast.error(e.response.data.message)
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
