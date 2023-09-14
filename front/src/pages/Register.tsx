import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { BASE_URL } from '@/utils/api'
import person from '../assets/img/person.png';
import city from '../assets/img/city.jpg';

interface FormData {
  email: string
}

export const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm<FormData>({ mode: 'onChange' })

  const [errorFetch, setErrorFetch] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()

  const handleRegister = async ({ email }: FormData): Promise<void> => {
    setLoading(true)
    const res = await fetch(`${BASE_URL}/api/register`, {
      method: 'POST',
      body: JSON.stringify({
        email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
    if (res.status === 200) {
      localStorage.setItem('email', email)
      navigate('/register-codigo')
      setLoading(false)
    } else {
      setErrorFetch(data)
      setLoading(false)
    }
    setLoading(false)
  }

  return (
    <>
      <div className='flex h-screen justify-center items-center text-sm relative'>
        <img src={person} alt="model-person" className='w-full absolute top-0 z-10'/>
        <img src={city} alt="urban-city" className='w-full absolute bottom-0' />
        <form
          autoComplete='off'
          onSubmit={handleSubmit(handleRegister)}
          className='z-20 mx-auto mt-[-25px] flex max-w-sm flex-col flex-nowrap items-center justify-center gap-5 rounded-[33px] border bg-white px-[37px] py-5 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.25)] max-[410px]:mx-3'
        >
          <div className='items-center justify-center pb-3 pt-5'>
            <Link
              to='/login'
              className='relative left-3 rounded-[16.5px] border 
                border-[#29103A] bg-[#fff] px-[25px] py-[10px] 
                text-12 font-semibold text-[#29103A] shadow-lg'
            >
              Iniciar sesión
            </Link>
            <Link
              to='/register'
              className='relative right-3 z-10 rounded-full border
               border-[#29103A] bg-[#29103A] px-[25px] py-[10px] text-12
               font-semibold text-white shadow-lg'
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
                className={`w-[251px] border-b-[1px] border-[#CFCFCF] pl-1 text-12 ${
                  errorFetch ? 'text-red-500' : ''
                } ${errors?.email?.message != null ? 'text-red-500' : ''}`}
                autoComplete='off'
                disabled={loading}
              />
              <p className='pl-1 text-[10px] text-red-500'>
                {errors.email?.message}
              </p>
              <p className='pl-1 text-[10px] text-red-500'>
                {errorFetch ? 'El correo ya está registrado' : ''}
              </p>
            </div>
          </div>
          <div className='flex w-full flex-col items-center justify-center gap-2'>
            <button
              disabled={!isDirty || !isValid || loading}
              className='my-3 h-[33px] w-[160px] rounded-full bg-[#29103A] text-12 font-semibold text-white shadow-lg'
            >
              Siguiente
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
