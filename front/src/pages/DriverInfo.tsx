import { MapView } from '@/components/Map/MapView'
import { useState, useEffect } from 'react'
import {
  BiHelpCircle,
  BiStar,
  BiXCircle,
  BiMessageDetail,
} from 'react-icons/bi'
import driverPhoto from '@/assets/img/driverPhoto.png'
import { PaymentFooterInfo } from '@/components/PaymentFooterInfo'
import { useNavigate } from 'react-router-dom'
import { FinishTripModal } from '@/components/FinishTripModal'
import { IoIosCall } from 'react-icons/io'

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
  const [finishLocation, setFinishLocation] = useState<string>('')

  const [tripInfo, setTripInfo] = useState({
    amount: 0,
    distance: 0,
    duration: 0,
  })
  const [isFinish, setIsFinish] = useState(false)
  const [startTrip, setStartTrip] = useState(false)

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
    setFinishLocation(localStorage.getItem('finishLocation') as string)
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
    setTimeout(() => {
      setStartTrip(true)
    }, 10000)

    setTimeout(() => {
      setIsFinish(true)
    }, 20000)

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
    <>
      {isFinish && (
        <div className='absolute z-50 flex h-screen w-full items-center justify-center'>
          <FinishTripModal />
        </div>
      )}
      <div
        className={`relative flex h-screen flex-col bg-[#F3EDF7] ${
          isFinish && 'blur-[3px]'
        }`}
      >
        <div className='flex-1'>
          <MapView
            geometry={geometry}
            startCoords={startCoords}
            finishCoords={finishCoords}
          />
        </div>
        <div className='mx-auto flex h-full w-full flex-1 flex-col justify-center gap-10 rounded-tl-[30px] rounded-tr-[30px] border-[2px] p-4 md:max-w-sm'>
          <h2 className='text-center font-semibold'>
            {startTrip ? (
              <>
                <span className='text-sm font-medium'>Viaje a</span> <br />
                {finishLocation}
              </>
            ) : (
              'Un vehículo esta en camino'
            )}
          </h2>
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
          <div className='flex items-center justify-center gap-5'>
            {!startTrip && (
              <>
                <button
                  onClick={handleClick}
                  className=' w-fit rounded-full bg-primary p-2'
                >
                  <BiXCircle className='text-4xl text-white' />
                </button>
                <button className=' w-fit rounded-full bg-primary p-2'>
                  <IoIosCall className='text-4xl text-white' />
                </button>
                <button className='w-fit rounded-full bg-primary p-2'>
                  <BiMessageDetail className='text-4xl text-white' />
                </button>
              </>
            )}
            {startTrip && (
              <button className='w-fit rounded-full bg-primary p-2'>
                <BiHelpCircle className='text-4xl text-white' />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
