import { HeaderAuth } from '@/components/HeaderAuth'
import { type FormEvent, useState } from 'react'
import { CgSpinner } from 'react-icons/cg'
import { Link } from 'react-router-dom'

type emailSentd = boolean | null

export const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [emailSent, setEmailSent] = useState<emailSentd>(null)
  const [isloading, setIsLoading] = useState<boolean>(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setIsLoading(true)
    await fetch('http://localhost:1237/users/recuperarPassword', {
      method: 'POST',
      body: JSON.stringify({
        email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    setIsLoading(false)
    setEmailSent(true)
  }
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value)
  }
  return (
    <>
      <div className='flex h-screen flex-col items-center text-sm'>
        <HeaderAuth />
        <form
          onSubmit={handleSubmit}
          className='z-20 mx-auto mt-[-25px] flex max-w-sm flex-col flex-nowrap items-center justify-center gap-5 rounded-[33px] bg-white px-[37px] py-5 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.25)] max-[410px]:mx-3'
        >
          {!emailSent ? (
            <>
              <header className='flex flex-col gap-2 text-center'>
                <h1 className='text-xl font-medium'>Modificá tu contraseña</h1>
                <p className='text-sm'>
                  Te enviaremos un mail con las instrucciones para que generes
                  una nueva clave de acceso.
                </p>
              </header>
              <input
                value={email}
                onChange={handleEmailChange}
                type='text'
                placeholder='Email'
                className='w-[251px] border-b-[1px] border-[#CFCFCF] px-2 outline-none'
              />
              <button className='my-3 h-[33px] w-[160px] rounded-full bg-[#29103A] text-[12px] font-medium text-white shadow-lg'>
                {isloading ? (
                  <CgSpinner className='mx-auto animate-spin text-center text-2xl text-white' />
                ) : (
                  'Enviar instrucciones'
                )}
              </button>
            </>
          ) : (
            <>
              <h1 className='text-center text-xl font-medium'>
                Si tus datos ingresados fueron correctos, recibirás un email.
              </h1>
              <p className='text-center'>
                Revisá tu casilla de correo y seguí las instrucciones para
                modificar tu contraseña.
              </p>
              <Link
                className='w-full bg-[#29103A] py-3 text-center text-white shadow-lg'
                to='/'
              >
                Ir al sitio
              </Link>
            </>
          )}
        </form>
      </div>
    </>
  )
}
