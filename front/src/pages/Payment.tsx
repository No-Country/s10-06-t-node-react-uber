import { useState, type FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import '../styles/index.css'
import mercadoPagoIcon from '../assets/mercado-pago-icon.svg'
import moneyIcon from '../assets/money-icon.svg'
import cardPayIcon from '../assets/tarjeta-pago-icon.svg'
import { SectionManager } from '@/components/Dashboard/SectionManager'
import { BASE_URL } from '@/utils/api'

const handlePayment = async (): Promise<void> => {
  const res = await fetch(`${BASE_URL}/api/register`, {
    method: 'POST',
    body: JSON.stringify({
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()
  if (res.status === 200) {
    console.log('res', res)
  } else {
    setErrorFetch(data)
  }
}

export const Payment: FC = () => {
  const [payment, setPayment] = useState('cash' as string)
  const navigate = useNavigate()
  return (
    <div className='relative h-screen w-screen'>
      <div className='px-4 pt-16'>
        <div className='flex items-center gap-[11px]'>
          <Link to='/dashboard'>
            <i
              className='flex h-[42px] w-[42px] items-center justify-center
            rounded-full border border-[#29103A] bg-[#CCCCCC]'
            >
              <AiOutlineArrowLeft color='#29103A' size='25' />
            </i>
          </Link>
          <h1 className='text-[24px] font-semibold tracking-[0.03125rem]'>
            Método de pago
          </h1>
        </div>
        <div className='flex h-[609px] flex-col justify-between'>
          <ul className='pt-[31px]'>
            <li
              className='mt-4 flex h-[60px] items-center justify-between rounded-[24px] 
                bg-[#CCCCCC] pl-[18px] pr-[11px]  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]'
            >
              <div className='flex items-center'>
                <img src={moneyIcon} />
                <div className='pl-[17px]'>
                  <h2 className='text-[18px]'>Efectivo</h2>
                </div>
              </div>
              <input
                id='radio-cash'
                type='radio'
                value='cash'
                name='payment'
                checked={payment === 'cash'}
                onChange={(e) => {
                  setPayment(e.target.value)
                }}
                className='outline-non form-radio appearance-none border-[#29103A] bg-transparent text-[#29103A] accent-black focus:ring-0 focus:ring-current focus:ring-offset-0'
              ></input>
            </li>
            <li
              className='mt-4 flex h-[60px] items-center justify-between rounded-[24px] 
                bg-[#CCCCCC] pl-[18px] pr-[11px]  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]'
            >
              <div className='flex items-center'>
                <img src={mercadoPagoIcon} />
                <div className='pl-[17px]'>
                  <h2 className='text-[18px]'>Mercadopago</h2>
                </div>
              </div>
              <input
                id='radio-mercado'
                type='radio'
                value='mercado'
                name='payment'
                checked={payment === 'mercado'}
                onChange={(e) => {
                  setPayment(e.target.value)
                }}
                className='outline-non form-radio appearance-none border-[#29103A] bg-transparent text-[#29103A] accent-black focus:ring-0 focus:ring-current focus:ring-offset-0'
              ></input>
            </li>
            <li
              className='mt-4 flex h-[60px] items-center justify-between rounded-[24px] 
                bg-[#CCCCCC] pl-[18px] pr-[11px]  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]'
            >
              <div className='flex items-center'>
                <img src={cardPayIcon} />
                <div className='pl-[17px]'>
                  <h2 className='text-[18px]'>Tarjeta de crédito/débito</h2>
                </div>
              </div>
              <input
                id='radio-card'
                type='radio'
                value='card'
                name='payment'
                checked={payment === 'card'}
                onChange={(e) => {
                  setPayment(e.target.value)
                }}
                className='outline-non form-radio appearance-none border-[#29103A] bg-transparent text-[#29103A] accent-black focus:ring-0 focus:ring-current focus:ring-offset-0'
              ></input>
            </li>
          </ul>

          <div className='flex flex-col items-center'>
            <section
              className='mt-4 flex h-[50px] w-[301px] items-center justify-between gap-y-[18px] rounded-[24px] 
                bg-[#CCCCCC] py-[11px] pl-[33px] pr-[25px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]'
            >
              <svg
                width='14'
                height='20'
                viewBox='0 0 14 20'
                fill='full'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z'
                  fill='#29103A'
                />
              </svg>
              <p className='text-12 font-semibold'>3 km</p>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z'
                  fill='#29103A'
                />
                <path
                  d='M10.5 5.75C10.5 5.33579 10.1642 5 9.75 5C9.33579 5 9 5.33579 9 5.75V8.83095C9 10.1766 9.70604 11.4236 10.8599 12.116L13.6383 13.783C13.9768 13.9861 14.4159 13.878 14.6214 13.5409C14.8298 13.1992 14.7188 12.7531 14.3746 12.5489L12.1202 11.2113C11.1158 10.6154 10.5 9.53398 10.5 8.36606V5.75Z'
                  fill='#29103A'
                />
              </svg>
              <p className='text-12 font-semibold'>12 min</p>
              <svg
                width='12'
                height='20'
                viewBox='0 0 12 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6.08889 8.77778C3.56667 8.12222 2.75556 7.44444 2.75556 6.38889C2.75556 5.17778 3.87778 4.33333 5.75556 4.33333C7.73333 4.33333 8.46667 5.27778 8.53333 6.66667H10.9889C10.9111 4.75556 9.74444 3 7.42222 2.43333V0H4.08889V2.4C1.93333 2.86667 0.2 4.26667 0.2 6.41111C0.2 8.97778 2.32222 10.2556 5.42222 11C8.2 11.6667 8.75556 12.6444 8.75556 13.6778C8.75556 14.4444 8.21111 15.6667 5.75556 15.6667C3.46667 15.6667 2.56667 14.6444 2.44444 13.3333H0C0.133333 15.7667 1.95556 17.1333 4.08889 17.5889V20H7.42222V17.6111C9.58889 17.2 11.3111 15.9444 11.3111 13.6667C11.3111 10.5111 8.61111 9.43333 6.08889 8.77778Z'
                  fill='#29103A'
                />
              </svg>
              <p className='text-12 font-semibold'>1000</p>
            </section>
            <div className='flex justify-center py-6'>
              {(payment === 'mercado' || payment === 'cash') && (
                <button
                  type='submit'
                  onSubmit={handlePayment}
                  className='h-[32px] 
            w-[193px] rounded-3xl bg-[#29103A] text-[14px] uppercase text-white'
                >
                  Confirmar viaje
                </button>
              )}
              {payment === 'card' && (
                <button
                  onClick={() => {
                    navigate('/payment/cards')
                  }}
                  type='button'
                  className='h-[32px] 
            w-[193px] rounded-3xl bg-[#29103A] text-[14px] uppercase text-white'
                >
                  Continuar al pago
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='absolute h-[15%] w-full'>
        <SectionManager />
      </div>
    </div>
  )
}
