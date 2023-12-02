import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Brand from '../../components/Brand'
import HandlerLoadingButton from '../../components/HandlerLoadingButton'
import { Paths } from '../../routes/paths'
import { AuthService } from '../../services/AuthService'

type UserInfo = {
  username: string
  password: string
}

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInfo>({
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'all',
  })
  const onSubmit: SubmitHandler<UserInfo> = async (data: UserInfo) => {
    await AuthService.login(data)
  }
  const [isShow, setIsShow] = useState<boolean>(false)

  const handleShowClick = () => {
    setIsShow(!isShow)
  }
  return (
    <div>
      <div className="flex justify-between items-center mt-5">
        <Brand />
        <div>
          <Link
            to={Paths.HOME}
            className="text-button cursor-pointer"
          >
            Do you need help?
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center md:m-auto">
        <div className="flex justify-center mt-20">
          <h1 className="text-3xl font-montserrat">Sign In</h1>
        </div>
        <form className="mt-10">
          <div>
            <label
              htmlFor="username"
              className="input-label"
            >
              Username
            </label>
            <br />
            <input
              id="username"
              className={`${
                errors.username ? 'input-border-error' : 'input-border'
              } w-full`}
              {...register('username', {
                required: {
                  value: true,
                  message: 'Please enter username',
                },
              })}
            />
            {errors.username && (
              <div className="text-red-600 text-sm">
                {errors.username.message}
              </div>
            )}
          </div>
          <div className="mt-5">
            <label
              htmlFor="password"
              className="input-label"
            >
              Password
            </label>
            <br />
            <div className="flex w-full relative">
              <input
                type={isShow ? 'text' : 'password'}
                className={`${
                  errors.password ? 'input-border-error' : 'input-border'
                } w-full `}
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Please input your password',
                  },
                })}
              />

              <button
                className="absolute right-2 top-1/3"
                onClick={handleShowClick}
              >
                <FontAwesomeIcon
                  icon={
                    isShow
                      ? ('far fa-eye' as IconProp)
                      : ('far fa-eye-slash' as IconProp)
                  }
                />
              </button>
            </div>
            {errors.password && (
              <div className="text-red-600 text-sm">
                {errors.password.message}
              </div>
            )}
          </div>
        </form>
        <div className="flex justify-between mt-5 items-center">
          <Link
            to="/"
            className="text-button cursor-pointer"
          >
            Forgot your password?
          </Link>
          <HandlerLoadingButton
            color="primary"
            size="small"
            varient="contained"
            onClick={() => handleSubmit(onSubmit)()}
          >
            Sign in
          </HandlerLoadingButton>
        </div>
        <div className="mt-5">
          <span className="text-button">You don't have account? </span>
          <Link
            to={Paths.SIGN_UP}
            className="text-button cursor-pointer underline"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}
export default SignIn
