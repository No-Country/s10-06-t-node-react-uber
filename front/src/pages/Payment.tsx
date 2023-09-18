import { useState, type FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import mercadoPagoIcon from '../assets/mercado-pago-icon.svg'
import moneyIcon from '../assets/money-icon.svg'
import { SectionManager } from '@/components/Dashboard/SectionManager'
import { useForm } from 'react-hook-form'
import { HeaderTitle } from '@/components/AccountManager/HeaderTitle'

import { PaymentFooterInfo } from '@/components/PaymentFooterInfo'

interface InfoPayment {
  idUsuario: string
  idConductor: string
  idViaje: string
  amount: number
}

export const Payment: FC = () => {
  const { handleSubmit } = useForm<FormData>({ mode: 'onChange' })
  const [payment, setPayment] = useState('cash' as string)
  const [tripInfo, setTripInfo] = useState({
    amount: 0,
    distance: 0,
    duration: 0,
  })
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
  useEffect(() => {
    setTripInfo(JSON.parse(localStorage.getItem('TripInfo') ?? '{}'))
  }, [])
  const handlePayment = async (): Promise<void> => {
    if (payment === 'cash') {
      navigate('/looking-for-driver')
    } else {
      try {
        const res = await fetch(
          'https://uber-project-nocountry-backend-production.up.railway.app/payment',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
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
  }

  return (
    <div className='relative h-screen w-screen'>
      <div className='px-4 pt-2'>
        <HeaderTitle link={'/select-trip'} title={'Método de pago'} />
        <div className='flex h-[500px] flex-col justify-between'>
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
          </ul>
          <div className='flex flex-col items-center'>
            <section>
              <PaymentFooterInfo
                amount={tripInfo.amount}
                distance={tripInfo.distance}
                duration={tripInfo.duration}
              />
            </section>
            <div className='flex justify-center py-6'>
              {(payment === 'mercado' || payment === 'cash') && (
                <button
                  type='submit'
                  onClick={handleSubmit(handlePayment)}
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
      <div className=' absolute bottom-0 h-[15%] w-full'>
        <SectionManager />
      </div>
    </div>
  )
}
