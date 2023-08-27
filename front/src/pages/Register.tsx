import { Link } from 'react-router-dom'
import '../styles/index.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as apiAuth from '../utils/apiAuth'
import { HeaderAuth } from '@/components/HeaderAuth'
interface Errors {
  email?: string
}

export const Register: React.FC = ({}) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value)
    setErrors({})
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log('handleSubmit:', e)

    const validateEmail = (email: string) => {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

      if (regex.test(email)) {
        const registerEmail = (email: string) => {
          return apiAuth
            .register({ email })
            .then(() => {
              console.log('iniciaste sesion correctamente')
              navigate('/register-codigo', { state: { email } })
            })
            .catch((err) => {
              console.log('err:', err)
            })
        }
        registerEmail(email)
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
          className='z-20 mx-auto mt-[-25px] flex max-w-sm flex-col flex-nowrap items-center justify-center gap-5 rounded-[33px] border bg-white px-[37px] py-5 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.25)] max-[410px]:mx-3'
        >
          <div className='items-center justify-center pb-3 pt-5'>
            <Link
              to='/login'
              className='relative left-3 z-10 rounded-[16.5px] border border-[#29103A] bg-[#fff] px-[35px] py-[10px] text-[10px] font-semibold text-[#29103A] shadow-lg'
            >
              Iniciar sesión
            </Link>
            <Link
              to='/register'
              className='relative right-3 rounded-full border border-[#29103A] bg-[#29103A] px-[35px] py-[10px] text-[10px] font-semibold text-white shadow-lg'
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
                placeholder='Ingresar correo'
                className={`w-[251px] border-b-[1px] border-[#CFCFCF] text-[10px] ${
                  errors?.email && 'border-red-500'
                }`}
              />
            </div>
          </div>
          <div className='flex w-full flex-col items-center justify-center gap-2'>
            <button className='my-3 h-[33px] w-[160px] rounded-full bg-[#29103A] text-[10px] font-semibold text-white shadow-lg'>
              Siguiente
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
