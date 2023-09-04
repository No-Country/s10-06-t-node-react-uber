import { type FC } from 'react'
import { Link } from 'react-router-dom'
import { SiMercadopago } from 'react-icons/si'
import { RiVisaLine } from 'react-icons/ri'
import {
  BsFillPlusCircleFill,
  BsCashStack,
  BsCreditCard2Back,
} from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'

export const Payment: FC = () => {
  const payMethods = [
    {
      location: 'Efectivo',
      icon: <BsCashStack size='25' />,
    },
    {
      location: 'Mercadopago',
      icon: <SiMercadopago size='25' />,
    },
    {
      location: 'Tarjeta de crédito/débito',
      icon: <BsCreditCard2Back color='#29103A' size='25' />,
    },
  ]

  return (
    <div className='relative h-full px-5 pt-16'>
      <div className='flex items-center gap-1'>
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
      <ul className='pt-5'>
        {payMethods.map((address, index) => (
          <li
            className='mt-5 flex h-[66px] items-center justify-between rounded-[25px] 
              bg-[#CCCCCC] px-5  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]'
            key={index}
          >
            <div className='flex items-center'>
              {address.icon}
              <div className='pl-2'>
                <h2 className='text-[18px]'>{address.location}</h2>
              </div>
            </div>
            <input
              id='default-radio-1'
              type='radio'
              value=''
              name='default-radio'
              className='outline-non form-radio appearance-none border-[#29103A] text-[#29103A] accent-black focus:ring-0 focus:ring-current focus:ring-offset-0'
            ></input>
          </li>
        ))}
      </ul>
      <button
        className='mt-5 flex h-[66px] w-full items-center 
        rounded-[25px] border border-[#29103A] bg-[#CCCCCC] px-5'
      >
        <BsFillPlusCircleFill color='#29103A' size='25' />
        <p className='pl-2 text-[18px]'>Agregar medio de pago</p>
      </button>
      <div className='flex justify-center pt-6'>
        <button
          type='submit'
          className='absolute bottom-[5vh] h-[32px] 
          w-[193px] rounded-3xl bg-[#29103A] text-[14px] uppercase text-white'
        >
          confirmar datos
        </button>
      </div>
    </div>
  )
}
