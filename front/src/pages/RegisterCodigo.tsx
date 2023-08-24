import { Link } from 'react-router-dom'
import '../styles/index.css'
import { HeaderAuth } from '@/components/HeaderAuth'

export const RegisterCodigo: React.FC = () => {
  return (
    <>
      <div className='flex h-screen flex-col items-center text-sm'>
        <HeaderAuth />
        <form className='z-20 mx-auto mt-[-25px] flex max-w-sm flex-col flex-nowrap items-center justify-center gap-5 rounded-[33px] bg-white px-[37px] py-5 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.25)] max-[410px]:mx-3'>
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
                type='number'
                className='w-[251px] border-b-[1px] border-[#CFCFCF] text-[10px] outline-none'
              />
            </div>
          </div>
          <div className='flex w-full flex-col items-center justify-center gap-2'>
            <Link to='/register-data'>
              <button className='my-3 h-[33px] w-[160px] rounded-full bg-[#29103A] text-[10px] font-semibold text-white shadow-lg'>
                Siguiente
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}
