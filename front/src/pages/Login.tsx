import { Link } from 'react-router-dom'
import { HeaderAuth } from '@/components/HeaderAuth'
import { FormEvent, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
interface Errors {
  email?: string
  password?: string
}
export const Login: React.FC = () => {
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

    const validateEmail = (email: string) => {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

      if (regex.test(email)) {
        const authLogin = async (email: string, password: string) => {
          const response = await fetch('http://localhost:1237/api/login', {
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
            {
              toast.success('Inicio de sesión exitoso!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
              })
            }
          }
        }
        authLogin(email, password)
      } else {
        return setErrors({ email: 'Ingrese un correo válido.' })
      }
    }
    validateEmail(email)
  }
  return (
    <>
      <div className='flex h-screen flex-col items-center text-sm'>
        <HeaderAuth />
        <form
          onSubmit={handleSubmit}
          className='z-20 mx-auto mt-[-25px] flex max-w-sm flex-col flex-nowrap items-center justify-center gap-5 rounded-[33px] bg-white px-[37px] py-5 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.25)] max-[410px]:mx-3'
        >
          <div className='items-center justify-center pb-3 pt-5'>
            <Link
              to='/login'
              className='relative left-3 z-10 rounded-full border border-[#29103A] bg-[#29103A] px-[35px] py-[10px] text-[10px] font-semibold text-white shadow-lg'
            >
              Iniciar sesión
            </Link>
            <Link
              to='/register'
              className='relative right-3 rounded-[16.5px] border border-[#29103A] bg-[#fff] px-[35px] py-[10px] text-[10px] font-semibold text-[#29103A] shadow-lg'
            >
              Registrarse
            </Link>
          </div>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col'>
              <input
                type='text'
                placeholder='Ingresar correo electronico'
                className={`w-[251px] border-b-[1px] border-[#CFCFCF] text-[11px] outline-none ${
                  errors.email && 'border-b-[1px] border-red-500'
                }`}
                value={email}
                onChange={handleEmailChange}
              />
              {errors?.email && (
                <p className='text-xs text-red-500'>{errors.email}</p>
              )}
            </div>
            <div className='flex flex-col'>
              <input
                type='text'
                placeholder='Contraseña'
                className={`w-[251px] border-b-[1px] border-[#CFCFCF] text-[11px] outline-none ${
                  errors.password && 'border-b-[1px] border-red-500'
                }`}
                value={password}
                onChange={handlePasswordChange}
              />
              {errors?.password && (
                <p className='text-xs text-red-500'>{errors.password}</p>
              )}
              <Link
                className='ml-auto text-[11px] text-[#8A8A8A] hover:underline'
                to='/change-password'
              >
                ¿Has olvidado tu contraseña?
              </Link>
            </div>
          </div>
          <div className='flex w-full flex-col items-center justify-center gap-2'>
            <button className='my-3 h-[33px] w-[160px] rounded-full bg-[#29103A] text-[12px] font-medium text-white shadow-lg'>
              Iniciar sesión
            </button>
            <span className='text-12 font-medium text-[#B1B1B1]'>
              Seguir con
            </span>
            <div className='flex gap-5 [&>div>img]:rounded-full [&>div>img]:shadow-xl [&>div]:h-9 [&>div]:w-9 [&>div]:rounded-full'>
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
