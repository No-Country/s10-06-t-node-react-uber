import { MapView } from '@/components/Map/MapView'
import { useState, useEffect } from 'react'
import { BiStar, BiXCircle } from 'react-icons/bi'
import { BsChatLeftTextFill, BsFillTelephoneFill } from 'react-icons/bs'
import driverPhoto from '@/assets/img/driverPhoto.png'
import { PaymentFooterInfo } from '@/components/PaymentFooterInfo'
import { useNavigate } from 'react-router-dom'

interface Conductor {
  apellido: string
  categoria: string
  correoElectronico: string
  estado: string
  nombre: string
  pagos: number
  puntuacion: string
  telefono: string
  vehiculo: string
  __v: number
  _id: string
}

export const DriverInfo: React.FC = () => {
  const [driver, setDriver] = useState<Conductor>()
  const [driverId, setDriverId] = useState<string>()
  const [geometry, setGeometry] = useState<string>('')
  const [startCoords, setStartCoords] = useState<number[]>([])
  const [finishCoords, setFinishCoords] = useState<number[]>([])
  const [tripInfo, setTripInfo] = useState({
    amount: 0,
    distance: 0,
    duration: 0,
  })
  const navigate = useNavigate()
  useEffect(() => {
    const geometryFromLocalStorage = localStorage.getItem('geometry') as string
    const startCoordsFromLocalStorage = localStorage.getItem(
      'startCoords',
    ) as string
    const finishCoordsFromLocalStorage = localStorage.getItem(
      'finishCoords',
    ) as string
    setTripInfo(JSON.parse(localStorage.getItem('TripInfo') as string))

    const startCoordsArray = startCoordsFromLocalStorage.split(',').map(Number)
    const finishCoordsArray = finishCoordsFromLocalStorage
      .split(',')
      .map(Number)

    setGeometry(geometryFromLocalStorage)
    setStartCoords(startCoordsArray)
    setFinishCoords(finishCoordsArray)
    const conductorid = localStorage.getItem('infoPayment')
    setDriverId(JSON.parse(conductorid as string).idConductor)

    const getDriver = async (): Promise<void> => {
      if (driverId) {
        const res = await fetch(
          `https://uber-project-nocountry-backend-production.up.railway.app/conductor/${driverId}`,
        )
        const data = await res.json()
        setDriver(data)
      }
    }

    void getDriver()
  }, [driverId])

  const handleClick = (): void => {
    localStorage.removeItem('infoPayment')
    localStorage.removeItem('geometry')
    localStorage.removeItem('startCoords')
    localStorage.removeItem('finishCoords')
    localStorage.removeItem('TripInfo')
    navigate('/dashboard')
  }
  return (
    <div className='flex h-screen flex-col bg-[#F3EDF7]'>
      <div className='flex-1'>
        <MapView
          geometry={geometry}
          startCoords={startCoords}
          finishCoords={finishCoords}
        />
      </div>
      <div className='mx-auto flex h-full w-full flex-1 flex-col justify-evenly 
        gap-5 px-8 md:max-w-sm
        border-[2px] rounded-tl-[30px] rounded-tr-[30px]'
      >
        <h2 className='text-lg font-semibold'>Un vehículo esta en camino</h2>
        <div className='mx-auto flex w-full max-w-md items-center justify-between'>
          <img src={driverPhoto} alt='' />
          <div>
            <p className='text-18 font-medium'>
              {driver?.nombre} {driver?.apellido}
            </p>
            <span className=' text-sm text-slate-400'>Chevrolet Onix</span>
          </div>
          <div className='flex flex-col items-center'>
            <div className='flex items-center gap-1'>
              <BiStar className='text-xl' />
              {driver?.puntuacion}
            </div>
            <p className='text-semibold text-sm'>AD 346 JO</p>
          </div>
        </div>
        <PaymentFooterInfo
          amount={tripInfo.amount}
          distance={tripInfo.distance}
          duration={tripInfo.duration}
        />
        <div className='flex justify-evenly'>
          <button
            onClick={handleClick}
            className='w-[50px] h-[50px] flex items-center justify-center rounded-full bg-primary'
          >
            <BiXCircle className='text-3xl text-white' />
          </button>
          <button
            className='w-[50px] h-[50px] flex items-center justify-center rounded-full bg-primary'
          >
            <BsChatLeftTextFill className='text-2xl text-white'/>
          </button>
          <button
            className='w-[50px] h-[50px] flex items-center justify-center rounded-full bg-primary'
          >
            <BsFillTelephoneFill className='text-2xl text-white' />
          </button>
        </div>
      </div>
    </div>
  )
}
