import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import HandlerLoadingButton from '../../components/HandlerLoadingButton'

type UserInfo = {
  email: string
  password: string
}

const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserInfo>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'all',
  })
  const onSubmit: SubmitHandler<UserInfo> = (data: UserInfo) => {
    console.log('hello')
    alert(JSON.stringify(data))
  }
  const [password, setPassword] = useState<string>('')
  const [isShow, setIsShow] = useState<boolean>(false)
  return (
    <div className="w-1/3 flex flex-col justify-center m-auto">
      <div className="flex justify-center mt-20">
        <h1 className="text-3xl font-montserrat">Sign In</h1>
      </div>
      <div>{password}///</div>
      <form className="mt-10">
        <div>
          <label
            htmlFor="email"
            className="input-label"
          >
            Email
          </label>
          <br />
          <input
            type="email"
            id="email"
            className={`${
              errors.email ? 'input-border-error' : 'input-border'
            } w-full`}
            {...register('email', {
              required: {
                value: true,
                message: 'Please enter email',
              },
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Please enter a valid email',
              },
            })}
          />
          {errors.email && (
            <div className="text-red-600 text-sm">{errors.email.message}</div>
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>

            <button
              className="absolute right-2 top-1/3"
              onClick={() => setIsShow(!isShow)}
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
      <div className="flex justify-between mt-5">
        <Link
          to="/"
          className="text-button cursor-pointer"
        >
          Forgot your password?
        </Link>
        <HandlerLoadingButton
          size="small"
          varient="contained"
          onClick={handleSubmit(onSubmit)}
        >
          Sign in
        </HandlerLoadingButton>
      </div>
    </div>
  )
}
export default SignIn
