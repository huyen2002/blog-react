import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Brand from '../../components/Brand'
import HandlerLoadingButton from '../../components/HandlerLoadingButton'
import { Paths } from '../../routes/paths'
import { AuthService } from '../../services/AuthService'

interface UserFullInfo {
  username: string
  email: string
  password: string
  repeatPassword: string
}
const SignUp = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFullInfo>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    mode: 'all',
  })

  const onSubmit: SubmitHandler<UserFullInfo> = async (data: UserFullInfo) => {
    await AuthService.signup(data)
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
          <h1 className="text-3xl font-montserrat">Sign Up</h1>
        </div>
        <form className="mt-10 flex flex-col gap-5">
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
          <div>
            <label
              htmlFor="email"
              className="input-label"
            >
              Email
            </label>
            <br />
            <input
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
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please input a valid email',
                },
              })}
            />
            {errors.email && (
              <div className="text-red-600 text-sm">{errors.email.message}</div>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="input-label"
            >
              Password
            </label>
            <br />
            <input
              id="password"
              type="password"
              className={`${
                errors.password ? 'input-border-error' : 'input-border'
              } w-full`}
              {...register('password', {
                required: {
                  value: true,
                  message: 'Please input password',
                },
              })}
            />
            {errors.password && (
              <div className="text-red-600 text-sm">
                {errors.password.message}
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="repeatPassword"
              className="input-label"
            >
              Repeat password
            </label>
            <br />
            <input
              id="repeatPassword"
              type="password"
              className={`${
                errors.repeatPassword ? 'input-border-error' : 'input-border'
              } w-full`}
              {...register('repeatPassword', {
                required: {
                  value: true,
                  message: 'Please input repeat password',
                },
                validate: {
                  value: (value) =>
                    value === watch('password') ||
                    'The password does not match',
                },
              })}
            />
            {errors.repeatPassword && (
              <div className="text-red-600 text-sm">
                {errors.repeatPassword.message}
              </div>
            )}
          </div>
          <div className="flex justify-between mt-5 items-center">
            <div>
              <span className="text-button">You had account? </span>
              <Link
                to={Paths.SIGN_IN}
                className="text-button cursor-pointer underline"
              >
                Sign in
              </Link>
            </div>

            <HandlerLoadingButton
              color="primary"
              size="small"
              varient="contained"
              onClick={() => handleSubmit(onSubmit)()}
            >
              Sign up
            </HandlerLoadingButton>
          </div>
        </form>
      </div>
    </div>
  )
}
export default SignUp
