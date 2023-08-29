import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import '../styles/index.css'
// import { useState } from 'react'
import * as apiAuth from '../utils/apiAuth'

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
        <div className='align-center relative flex items-center bg-center'>
          <div className='h-[284px] w-[360px] text-white'>
            <img
              className='absolute left-0 top-0 h-[360px] w-[360px]'
              alt='Ellipse'
              src='https://generation-sessions.s3.amazonaws.com/4312a83e34b65680c6affa9f9593c406/img/ellipse-28.svg'
            />
            <img
              className='absolute left-[74px] top-[62px] h-[76px] w-52 object-cover'
              alt='Logo'
              src='https://generation-sessions.s3.amazonaws.com/4312a83e34b65680c6affa9f9593c406/img/logo@2x.png'
            />
            <div className='relative'>
              <div className='font-graduate jtext-center absolute left-[79px] top-[138px] flex h-[100px] w-[211px] flex-col gap-[6px] text-[17px]'>
                CONECTANDO CIUDADES
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='206'
                  height='6'
                  viewBox='0 0 206 6'
                  fill='none'
                >
                  <path
                    d='M1 2.5C0.723858 2.5 0.5 2.72386 0.5 3C0.5 3.27614 0.723858 3.5 1 3.5L1 2.5ZM206 2.99998L201 0.113231L201 5.88673L206 2.99998ZM1 3.5L201.5 3.49998L201.5 2.49998L1 2.5L1 3.5Z'
                    fill='white'
                  />
                </svg>
                <span className='text-center'>ACERCANDO DESTINOS</span>
              </div>
            </div>
          </div>
          <div className='z-10 flex flex-col items-center justify-center text-white'></div>
        </div>
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
                    message: 'Por favor ingresa el código',
                  },
                })}
                autoComplete='off'
                placeholder='Por favor ingresa el código válido'
                className={`w-[251px] border-b-[1px] border-[#CFCFCF] text-[10px] ${
                  ((errors?.verificationCode?.message) != null) ? 'text-red-500' : ''
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
