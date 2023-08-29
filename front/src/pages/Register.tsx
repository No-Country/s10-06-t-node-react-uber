import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import '../styles/index.css'
// import { useState } from 'react'
import * as apiAuth from '../utils/apiAuth'
import { HeaderAuth } from '@/components/HeaderAuth'


interface FormData {
  email: string
}

export const Register: React.FC = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm<FormData>({ mode: 'onChange' })

  const navigate = useNavigate()
  // const [email, setEmail] = useState('')

  const handleRegister = (email: string): void => {
    apiAuth
      .register({ email })
      .then(() => {
        console.log('iniciaste sesion correctamente')
        reset()
        navigate('/register-codigo', { state: { email } })
      })
      .catch((err) => {
        console.log('err:', err)
      })
  }

  return (
    <>
      <div className='flex h-screen flex-col items-center text-sm'>
        <HeaderAuth />
        <form
          autoComplete='off'
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={handleSubmit((data) => {
             handleRegister(data.email)
          })}
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
                {...register('email', {
                  required: 'Este es un campo obligatorio',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message:
                      'Por favor introduzca un correo electrónico válido',
                  },
                })}
                placeholder='Ingresar correo'
                className={`w-[251px] border-b-[1px] border-[#CFCFCF] text-[10px] ${
                  ((errors?.email?.message) != null) ? 'text-red-500' : ''
                }`}
                autoComplete='off'
              />
              <p className='text-[10px] text-red-500'>
                {errors.email?.message}
              </p>
            </div>
          </div>
          <div className='flex w-full flex-col items-center justify-center gap-2'>
            <button
              disabled={!isDirty || !isValid}
              className='my-3 h-[33px] w-[160px] rounded-full bg-[#29103A] text-[10px] font-semibold text-white shadow-lg disabled:opacity-75'
            >
              Siguiente
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
