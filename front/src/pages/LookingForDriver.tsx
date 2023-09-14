import { HeaderTitle } from '@/components/AccountManager/HeaderTitle'
import { useEffect, type FC, useState } from 'react'
import ellipse_lg from '../assets/img/ellipse-lg.png'
import ellipse_md from '../assets/img/ellipse-md.png'
import ellipse_sm from '../assets/img/ellipse-sm.png'
import { HiUserCircle } from 'react-icons/hi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { PaymentFooterInfo } from '@/components/PaymentFooterInfo'

export const LookingForDriver: FC = () => {
  const navigate = useNavigate()

  const [isCancel, setIsCancel] = useState(false)
  const [tripInfo, setTripInfo] = useState({
    distance: 0,
    duration: 0,
    amount: 0,
  })

  const cancelTrip = (): void => {
    setIsCancel(true)
    navigate('/set-trip')
  }

  useEffect(() => {
    const nextPage = setTimeout(() => {
      navigate('/driver-info')
    }, 5000)

    if (isCancel) {
      clearTimeout(nextPage)
    }
  }, [navigate, isCancel])

  useEffect(() => {
    setTripInfo(JSON.parse(localStorage.getItem('TripInfo') ?? '{}'))
  }, [])

  return (
    <div className='flex h-screen w-full flex-col justify-around bg-[#E0DBD5] bg-[url(../assets/img/vector.png)] bg-contain bg-no-repeat'>
      <div className='px-5'>
        <HeaderTitle link={'/payment'} title={'Estamos buscando un chofer'} />
        <p className='text-center text-[14px] text-[#858585]'>
          Esto puede tardar unos segundos
        </p>
      </div>
      <div className='flex h-[70%] flex-col items-center justify-between'>
        <div className='relative flex h-[289px] w-[289px] items-center justify-center'>
          <img className='rotate360 absolute' src={ellipse_sm} alt='' />
          <img className='rotate-360 absolute ' src={ellipse_md} alt='' />
          <img className='rotate360 absolute' src={ellipse_lg} alt='' />
          <div
            className='absolute left-1/2 top-1/2 flex
                        -translate-x-1/2 -translate-y-1/2 rotate-0 transform items-center justify-center rounded-full'
          >
            <HiUserCircle color='#29103A' size='100' />
          </div>
        </div>
        <div className='flex flex-col items-center gap-5'>
          <div className='rounded-full bg-slate-100'>
            <PaymentFooterInfo
              amount={tripInfo.amount}
              distance={tripInfo.distance}
              duration={tripInfo.duration}
            />
          </div>
          <button
            className='mb-8 flex h-[60px] 
                    w-[247px] items-center rounded-3xl bg-[#E0DBD5] px-8 shadow-lg'
            onClick={cancelTrip}
          >
            <div className='mr-5 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#29103A]'>
              <AiFillCloseCircle color='white' size='35' />
            </div>
            <p>Cancelar</p>
          </button>
        </div>
      </div>
    </div>
  )
}
