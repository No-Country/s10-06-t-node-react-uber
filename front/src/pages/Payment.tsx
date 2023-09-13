import { useState, type FC } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import mercadoPagoIcon from '../assets/mercado-pago-icon.svg'
import moneyIcon from '../assets/money-icon.svg'
import cardPayIcon from '../assets/tarjeta-pago-icon.svg'
import { SectionManager } from '@/components/Dashboard/SectionManager'
import { useForm } from 'react-hook-form'
import marker from '@/assets/marker.svg'
import time from '@/assets/time.svg'
import dolar from '@/assets/dolar.svg'
interface InfoPayment {
  idUsuario: string
  idConductor: string
  idViaje: string
  amount: number
}

export const Payment: FC = () => {
  const { handleSubmit } = useForm<FormData>({ mode: 'onChange' })

  const [payment, setPayment] = useState('cash' as string)
  const location = useLocation()
  const { dataInfo, standardVehicle } = location.state || {}
  const navigate = useNavigate()
  const currentDate = new Date()
  const isoString = currentDate.toISOString()
  let idUsuario = ''
  let idConductor = ''
  let idViaje = ''
  let amount = 0
  console.log('isoString:', isoString)
  const infoPaymentString = localStorage.getItem('infoPayment')
  if (infoPaymentString) {
    const infoPaymentObject: InfoPayment = JSON.parse(infoPaymentString)
    idUsuario = infoPaymentObject.idUsuario
    idConductor = infoPaymentObject.idConductor
    idViaje = infoPaymentObject.idViaje
    amount = infoPaymentObject.amount
  } else {
    console.error('No "infoPayment" data found in localStorage.')
  }

  const handlePayment = async (): Promise<void> => {
    try {
      const res = await fetch(
        'https://uber-project-nocountry-backend-production.up.railway.app/payment',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            // id_usuario:  localStorage.getItem('infoPayment'),
            // id_conductor: localStorage.getItem('infoPayment.idConductor'),
            // id_viaje: localStorage.getItem('infoPayment.idViaje'),
            // token: localStorage.getItem('token'),
            // amount: localStorage.getItem('infoPayment.amount'),
            // metodo: 'tarjeta',
            // fecha: isoString,
            id_usuario: idUsuario,
            id_conductor: idConductor,
            id_viaje: idViaje,
            token: localStorage.getItem('token'),
            amount,
            metodo: 'tarjeta',
            fecha: isoString,
          }),
        },
      )
      const data = await res.json()
      console.log('data:', data)
      window.location.href = data
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='relative h-screen w-screen'>
      <div className='px-4 pt-16'>
        <div className='flex items-center gap-[11px]'>
          <Link to='/select-trip'>
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
            <section>
        <div className='flex w-full justify-center gap-5 rounded-full bg-[#29103A05] px-4 py-2 text-sm shadow-lg [&>div]:flex [&>div]:gap-2'>
        <div>
          <img src={marker} alt='route' />
          {dataInfo?.distancia
            ? (dataInfo.distancia / 1000).toFixed(1)
            : 'N/A'}{' '}
          km
        </div>
        <div>
          <img src={time} alt='travel duration' />
          {dataInfo?.tiempo ? Math.round(dataInfo.tiempo / 60) : 'N/A'} min
        </div>
        <div>
          <img src={dolar} alt='price' />
          {standardVehicle
            ? dataInfo?.precioStandar
            : dataInfo?.precioPremiun}
        </div>
      </div>
            </section>
            <div className='flex justify-center py-6'>
              {(payment === 'mercado' || payment === 'cash') && (
                <button
                  type='submit'
                  onClick={handleSubmit(handlePayment)}
                  // onClick={() => {
                  //   navigate('/dashboard')
                  // }}
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
