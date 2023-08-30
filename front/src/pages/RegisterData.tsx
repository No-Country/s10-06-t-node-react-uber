import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import '../styles/index.css'
import { HeaderAuth } from '@/components/HeaderAuth'
import * as apiAuth from '../utils/apiAuth'
import { useState } from 'react'

interface FormData {
  firstName: string
  lastName: string
  cellNumber: string
  password: string
}

export const RegisterData: React.FC = () => {
  const [isRegisterFailPopupOpen, setRegisterFailPopupOpen] = useState(false)

  const {
    register,
    reset,
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm<FormData>({ mode: 'onChange' })

  const navigate = useNavigate()
  const location = useLocation()
  const email = location.state?.email
  const verificationCode = location.state?.verificationCode
  console.log('email:', email)
  console.log('verificationCode:', verificationCode)
  // const [registerData, setRegisterData] = useState({
  //   email,
  //   verificationCode,
  //   firstName: '',
  //   lastName: '',
  //   cellNumber: '',
  //   password: '',
  // })

  const handleRegister = (data: FormData): void => {
    apiAuth
      .submitData({
        email,
        verificationCode,
        firstName: data.firstName,
        lastName: data.lastName,
        cellNumber: data.cellNumber,
        password: data.password,
      })
      .then(() => {
        console.log('data submitted', data)
        reset()
        navigate('/login')
      })
      .catch((err) => {
        console.log('err:', err)
        setRegisterFailPopupOpen(true)
        setTimeout(() => {
          setRegisterFailPopupOpen(false)
        }, 3000)
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
            handleRegister(data)
          })}
          className='z-20 mx-auto mt-[-25px] flex max-w-sm flex-col flex-nowrap items-center justify-center gap-5 rounded-[33px] bg-white px-[37px] py-5 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.25)] max-[410px]:mx-3'
        >
          <div className='items-center justify-center pb-3 pt-5'>
            <Link
              to='/login'
              className='relative left-3 rounded-[16.5px] border border-[#29103A] bg-[#fff] px-[35px] py-[10px] text-[10px] font-semibold text-[#29103A] shadow-lg'
            >
              Iniciar sesión
            </Link>
            <Link
              to='/register'
              className='relative right-3 z-10 rounded-full border border-[#29103A] bg-[#29103A] px-[35px] py-[10px] text-[10px] font-semibold text-white shadow-lg'
            >
              Registrarse
            </Link>
          </div>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col'>
              <input
                {...register('lastName', {
                  required: 'Este es un campo obligatorio',
                  pattern: {
                    value: /^[a-zа-яё -]+$/i,
                    message: 'Por favor introduzca apellido válido',
                  },
                  minLength: {
                    value: 2,
                    message: 'Muy pocos caracteres',
                  },
                  maxLength: {
                    value: 30,
                    message: 'Demasiados caracteres',
                  },
                })}
                autoComplete='off'
                type='text'
                placeholder='Apellido'
                className={`outline-none' w-[251px] border-b-[1px] border-[#CFCFCF] pl-1 text-[11px]
                ${errors?.lastName?.message != null ? 'text-red-500' : ''}`}
              />
              <p className='text-[10px] text-red-500'>
                {errors.lastName?.message}
              </p>
            </div>
            <div className='flex flex-col'>
              <input
                {...register('firstName', {
                  required: 'Este es un campo obligatorio',
                  pattern: {
                    value: /^[a-zа-яё -]+$/i,
                    message: 'Por favor introduzca nombre válido',
                  },
                  minLength: {
                    value: 2,
                    message: 'Muy pocos caracteres',
                  },
                  maxLength: {
                    value: 30,
                    message: 'Demasiados caracteres',
                  },
                })}
                autoComplete='off'
                type='text'
                placeholder='Nombre'
                className={`outline-none' w-[251px] border-b-[1px] border-[#CFCFCF] pl-1 text-[11px]
                ${errors?.firstName?.message != null ? 'text-red-500' : ''}`}
              />
              <p className='text-[10px] text-red-500'>
                {errors.firstName?.message}
              </p>
            </div>
            <div className='flex flex-col'>
              <input
                {...register('cellNumber', {
                  required: 'Este es un campo obligatorio',
                  pattern: {
                    value: /^(?:\+?\d{1,3}[ -]?)?\d{1,16}$/,
                    message:
                      'Por favor introduzca el número de teléfono válido',
                  },
                })}
                autoComplete='off'
                type='tel'
                placeholder='Número de teléfono'
                className={`outline-none' w-[251px] border-b-[1px] border-[#CFCFCF] pl-1 text-[11px]
                ${errors?.cellNumber?.message != null ? 'text-red-500' : ''}`}
              />
              <p className='text-[10px] text-red-500'>
                {errors.cellNumber?.message}
              </p>
            </div>
            <div className='flex flex-col'>
              <input
                {...register('password', {
                  required: 'Este es un campo obligatorio',
                  pattern: {
                    value: /^.{4,}$/,
                    message: 'Por favor introduzca contraseña válida',
                  },
                })}
                type='password'
                placeholder='Contraseña'
                className={`outline-none' w-[251px] border-b-[1px] border-[#CFCFCF] pl-1 text-[11px]
                ${errors?.password?.message != null ? 'text-red-500' : ''}`}
              />
              <p className='text-[10px] text-red-500'>
                {errors.password?.message}
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
        {isRegisterFailPopupOpen && (
          <div className='absolute top-0 flex rounded-md bg-red-100 p-3'>
            <svg
              className='mr-2 h-8 w-8 flex-shrink-0 stroke-current stroke-2 text-red-600'
              viewBox='0 0 24 24'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M0 0h24v24H0z' stroke='none' />
              <circle cx='12' cy='12' r='9' />
              <path d='M9 12l2 2 4-4' />
            </svg>

            <div className='text-red-700'>
              <div className='text-xl font-bold'>error de registro!</div>
              <div>inténtelo de nuevo</div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
