import { Link, useNavigate } from 'react-router-dom'
import { type FormEvent, useState } from 'react'
import { LoginGoogleButton } from '@/components/LoginGoogleButton'
import { LoginFacebookButton } from '@/components/LoginFacebookButton'
import { BASE_URL } from '@/utils/api'
import person from '../assets/img/person.png';
import city from '../assets/img/city.jpg';

interface Errors {
  email?: string
  password?: string
}
export const Login: React.FC = () => {
  const [errors, setErrors] = useState<Errors>({})
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

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

    const validateEmail = (email: string): void => {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

      if (regex.test(email)) {
        const authLogin = async (
          email: string,
          password: string,
        ): Promise<void> => {
          const response = await fetch(`${BASE_URL}/api/login`, {
            method: 'POST',
            body: JSON.stringify({
              email,
              password,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          })

          const data = await response.json()
          setErrors(data)

          if (response.status === 200) {
            const token = data.token
            localStorage.setItem('token', token)
            navigate('/dashboard')
          }
        }
        void authLogin(email, password)
      } else {
        setErrors({ email: 'Ingrese un correo válido.' })
      }
    }
    validateEmail(email)
  }
  return (
    <>
      <div className='flex h-screen items-center justify-center text-sm relative'>
        <img src={person} alt="model-person" className='w-full absolute top-0 z-10'/>
        <img src={city} alt="urban-city" className='w-full absolute bottom-0' />
        <form
          onSubmit={handleSubmit}
          className='z-20 mx-auto mt-[-25px] flex max-w-sm flex-col flex-nowrap items-center justify-center gap-5 rounded-[33px] bg-white px-[37px] py-5 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.25)] max-[410px]:mx-3'
        >
          <div className='items-center justify-center pb-3 pt-5'>
            <Link
              to='/login'
              className='relative left-3 z-10 rounded-full border border-[#29103A] 
                bg-[#29103A] px-[25px] py-[10px] text-12 
                font-semibold text-white shadow-lg'
            >
              Iniciar sesión
            </Link>
            <Link
              to='/register'
              className='relative right-3 rounded-[16.5px] border 
                border-[#29103A] bg-[#fff] px-[25px] py-[10px] 
                text-12 font-semibold text-[#29103A] shadow-lg'
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
                  Boolean(errors.email) && 'border-b-[1px] border-b-red-500'
                }`}
                value={email}
                onChange={handleEmailChange}
              />
              {Boolean(errors?.email) && (
                <p className='text-xs text-red-500'>{errors.email}</p>
              )}
            </div>
            <div className='flex flex-col'>
              <input
                type='text'
                placeholder='Contraseña'
                className={`w-[251px] border-b-[1px] border-[#CFCFCF] text-12 outline-none ${
                  Boolean(errors.password) && 'border-b-[1px] border-b-red-500'
                }`}
                value={password}
                onChange={handlePasswordChange}
              />
              {Boolean(errors?.password) && (
                <p className='text-xs text-red-500'>{errors.password}</p>
              )}
              <Link
                className='ml-auto text-12 text-[#8A8A8A] hover:underline'
                to='/change-password'
              >
                ¿Has olvidado tu contraseña?
              </Link>
            </div>
          </div>
          <div className='flex w-full flex-col items-center justify-center gap-2'>
            <button className='my-3 h-[33px] w-[160px] rounded-full bg-[#29103A] text-12 font-medium text-white shadow-lg'>
              Iniciar sesión
            </button>
            <span className='flex w-full items-center justify-center gap-4 px-3 text-12 '>
              o puedes
            </span>
            <div className='flex flex-col gap-2'>
              <LoginGoogleButton />
              <LoginFacebookButton />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
