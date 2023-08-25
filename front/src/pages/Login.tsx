import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { FormEvent, useState } from 'react'

interface Errors {
  email?: string
  password?: string
}

export const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value)
    setErrors({})
  }

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setPassword(e.target.value)
    setErrors({})
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setIsLoading(true)

    const validateEmail = (email: string) => {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

      if (regex.test(email)) {
        const authLogin = async (email: string, password: string) => {
          const response = await fetch('http://localhost:1237/login', {
            method: 'POST',
            body: JSON.stringify({
              email: email,
              password: password,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          })
          const data = await response.json()
          await setErrors(data)
          if (response.status === 200) {
            console.log('iniciaste sesion correctamente')
          }
          setIsLoading(false)
        }
        authLogin(email, password)
      } else {
        return setErrors({ email: 'Ingrese un correo válido.' })
      }
    }
    validateEmail(email)

    setIsLoading(false)
  }
  return (
    <>
      <div className='h-screen text-sm'>
        <div className='flex h-1/3 items-center justify-center bg-[url("../assets/login-elipse.jpg")] bg-center'>
          <div className='flex flex-col items-center justify-center text-white'>
            <img src={logo} alt='logo' />
            <h1 className='flex flex-col text-center font-serif text-xl'>
              CONECTANDO CIUDADES
              <svg width='100%' height='7' viewBox='0 0 206 6'>
                <path
                  d='M1 2.5C0.723858 2.5 0.5 2.72386 0.5 3C0.5 3.27614 0.723858 3.5 1 3.5L1 2.5ZM206 2.99998L201 0.113231L201 5.88673L206 2.99998ZM1 3.5L201.5 3.49998L201.5 2.49998L1 2.5L1 3.5Z'
                  fill='white'
                />
              </svg>
              ACERCANDO DESTINOS
            </h1>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className='mx-auto mt-[-25px] flex max-w-sm flex-col items-center justify-center gap-5 rounded-3xl border bg-white py-5 shadow-2xl max-[410px]:mx-3'
        >
          <div className='items-center justify-center pb-3 pt-5'>
            <Link
              to='/login'
              className='relative left-3 z-10 rounded-full border border-[#29103A] bg-[#29103A] px-7 py-1.5 font-medium text-white shadow-lg'
            >
              Iniciar sesión
            </Link>
            <Link
              to='/register'
              className='relative right-3 rounded-full border border-[#29103A] px-7 py-1.5 font-medium text-[#29103A] shadow-lg'
            >
              Registrarse
            </Link>
          </div>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col'>
              <input
                value={email}
                onChange={handleEmailChange}
                type='text'
                placeholder='Ingresar correo o usuario'
                className={`w-[251px] border-b-[1px] border-[#CFCFCF] ${
                  errors?.email && 'border-red-500'
                }`}
              />
              {errors?.email && (
                <span className='text-red-500'>{errors.email}</span>
              )}
            </div>
            <div className='flex flex-col'>
              <input
                value={password}
                onChange={handlePasswordChange}
                type='text'
                placeholder='Contraseña'
                className={`w-[251px] border-b-[1px] border-[#CFCFCF] ${
                  errors?.password && 'border-red-500'
                }`}
              />
              {errors?.password && (
                <span className='text-red-500'>La contraseña es inválida</span>
              )}
              <Link
                to='#'
                className='mt-1 flex justify-end text-xs text-[#B1B1B1] hover:underline'
              >
                ¿Has olvidado tu contraseña?
              </Link>
            </div>
          </div>
          <div className='mb-5 flex w-full flex-col items-center justify-center gap-2'>
            <button
              disabled={isLoading}
              className={`text-medium my-3 h-[33px] w-[200px] rounded-full bg-[#29103A] text-white shadow-lg ${
                isLoading && 'cursor-not-allowed bg-[#29103aa8]'
              }`}
            >
              {!isLoading ? (
                'Iniciar sesión'
              ) : (
                <div
                  className='inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
                  role='status'
                >
                  <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
                    Loading...
                  </span>
                </div>
              )}
            </button>
            <span className='font-medium text-[#B1B1B1]'>Seguir con</span>
            <div className='flex gap-5 [&>div]:h-9 [&>div]:w-9 [&>div]:rounded-full [&>div]:border [&>div]:shadow-lg'>
              <div>
                <img
                  src='https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png'
                  alt='google'
                  className='p-2'
                />
              </div>
              <div>
                <img
                  src='https://cdn.iconscout.com/icon/free/png-256/free-facebook-logo-2019-1597680-1350125.png'
                  alt='facebook'
                  className='p-2'
                />
              </div>
              <div>
                <img
                  src='https://images.freeimages.com/fic/images/icons/2795/office_2013_hd/2000/outlook.png'
                  alt='outlook'
                  className='p-2'
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
