import { type FC } from 'react'
import logo from '@/assets/logo.png'
import { BsCashCoin } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'

// SOLO ES UN PROTOTIPO, EN ESPERA DEL REAL.

export const InvoiceModal: FC = () => {
  return (
    <div className='h-screen'>
      <div className="flex h-1/3 flex-col items-center justify-center rounded-bl-[50px] rounded-br-[50px] bg-[url('../assets/login-elipse.jpg')] bg-center text-white">
        <img src={logo} alt='logo-urban-move' />
        <h1 className='text-xl uppercase'>recibo de pago</h1>
      </div>
      <div className='z-50h-[470px] relative top-[-40px] z-50 m-auto h-[470px] w-[90%] rounded-[40px] bg-white p-5 shadow-3xl'>
        <div className='flex justify-between text-[#29103A]'>
          <h2 className='text-xl font-bold uppercase'>Factura</h2>
          <i>
            <AiFillCloseCircle size='25' />
          </i>
        </div>
        <div className='flex justify-between border-b-2 border-[#29103A] py-5'>
          <h3 className='text-xl font-bold'>Total</h3>
          <p className='text-xl font-bold'>ARS 480.00</p>
        </div>
        <div className='flex justify-between border-b-[1px] border-slate-500 py-5'>
          <p>Tarifa de viaje</p>
          <p>ARS 440.00</p>
        </div>
        <div className='flex-col border-b-[1px] border-slate-500 py-5'>
          <div className='flex justify-between'>
            <p>Subtotal</p>
            <p>ARS 440.00</p>
          </div>
          <div className='flex justify-between'>
            <p>Tarifa de reserva</p>
            <p>ARS 40.00</p>
          </div>
        </div>
        <div className='border-b-[1px] border-slate-500 py-5'>
          <h3 className='font-semibold'>Payments</h3>
          <div className='flex justify-between py-2'>
            <div className='flex'>
              <i className='flex items-center justify-center'>
                <BsCashCoin color='green' size='32' />
              </i>
              <div className='pl-2'>
                <p>Cash</p>
                <p className='text-slate-500'>23/08/2023 8:07 AM</p>
              </div>
            </div>
            <p className='font-semibold'>ARS 480.00</p>
          </div>
        </div>
        <div className='flex justify-between py-5'>
          <p>Distancia recorrida</p>
          <p>2 km</p>
        </div>
      </div>
    </div>
  )
}
