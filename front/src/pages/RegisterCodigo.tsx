import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import '../styles/index.css'
// import { useState } from 'react'
import * as apiAuth from '../utils/apiAuth'
import { HeaderAuth } from '@/components/HeaderAuth'

interface FormData {
  verificationCode: string
}

export const RegisterCodigo: React.FC = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm<FormData>({ mode: 'onChange' })
  const navigate = useNavigate()
  const location = useLocation()
  const email = location.state?.email

  console.log('email:', email)
  // const [verificationCode, setVerificationCode] = useState('')

  const handleRegister = (verificationCode: string): void => {
    apiAuth
      .verifyCodigo({
        email,
        verificationCode,
      })
      .then(() => {
        console.log('codigo correctamente')
        reset()
        navigate('/register-data', { state: { email, verificationCode } })
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
            handleRegister(data.verificationCode)
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
          <div className='flex flex-col items-center gap-5'>
            <p className='h-[24px] text-center text-[10px] leading-none'>
              Ingresa el código que acabamos de enviarte al correo seleccionado
            </p>
            <div className='flex flex-col'>
              <input
                {...register('verificationCode', {
                  required: 'Este es un campo obligatorio',
                  pattern: {
                    value: /^\d{4}$/,
                    message: 'Por favor ingresa el código válido',
                  },
                })}
                autoComplete='off'
                placeholder='Por favor ingresa el código válido'
                className={`w-[251px] border-b-[1px] border-[#CFCFCF] pl-1 text-[10px] ${
                  errors?.verificationCode?.message != null
                    ? 'text-red-500'
                    : ''
                }`}
              />
              <p className='text-[10px] text-red-500'>
                {errors.verificationCode?.message}
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
