import { LoadingButton } from '@mui/lab'
import { ReactNode, useState } from 'react'

const HandlerLoadingButton = ({
  size,
  varient,
  onClick,
  children,
}: {
  size: string
  varient: string
  onClick: () => void
  children: ReactNode
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleClick = () => {
    try {
      console.log('helklo', isLoading)

      setIsLoading(true)
      onClick()

      console.log('isLoading', isLoading)
    } catch (e) {
      console.log('Error', e)
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
      sx={{
        backgroundColor: '#4A54D1',
        ':hover': {
          backgroundColor: '#3e46c9',
        },
      }}
    >
      {children}
    </LoadingButton>
  )
}
export default HandlerLoadingButton
