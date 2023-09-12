import { MapView } from '@/components/Map/MapView'
import { useState, useEffect } from 'react'
import standard from '@/assets/standard.svg'
import premium from '@/assets/premium.svg'
import marker from '@/assets/marker.svg'
import time from '@/assets/time.svg'
import dolar from '@/assets/dolar.svg'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate, Link } from 'react-router-dom'
import { useAuthStore } from '@/context/GoogleAuthContext'
interface DataInfo {
  precioStandar?: number
  precioPremiun?: number
  distancia?: number
  tiempo?: number
  idConductorStandar?: string
  idConductorPremiun?: string
  idViaje?: string
}

type ConditionalDataInfo = DataInfo | undefined

export const SelectTrip: React.FC = () => {
  const navigate = useNavigate()
  const [standardVehicle, setStandardVehicle] = useState(true)
  const [geometry, setGeometry] = useState<string>('')
  const [startCoords, setStartCoords] = useState<number[]>([])
  const [finishCoords, setFinishCoords] = useState<number[]>([])
  const [dataInfo, setDataInfo] = useState<ConditionalDataInfo>(undefined)
  const { user } = useAuthStore()

  const handleStandardVehicle = (): void => {
    setStandardVehicle(true)
  }

  const handlePremiumVehicle = (): void => {
    setStandardVehicle(false)
  }

  useEffect(() => {
    const startLocation = localStorage.getItem('startLocation')
    const finishLocation = localStorage.getItem('finishLocation')

    if (!startLocation || !finishLocation) {
      navigate('/dashboard')
    } else {
      void getGeometry()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, user])

  const getGeometry = async (): Promise<void> => {
    try {
      const res = await fetch(
        'https://uber-project-nocountry-backend-production.up.railway.app/viajes',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token: localStorage.getItem('token'),
            origen: localStorage.getItem('startLocation'),
            destino: localStorage.getItem('finishLocation'),
          }),
        },
      )
      if (res.ok) {
        const data = await res.json()
        setDataInfo(data)
        setGeometry(data.directionsData.routes[0].geometry)
        setStartCoords(data.directionsData.waypoints[0].location)
        setFinishCoords(data.directionsData.waypoints[1].location)
      } else {
        navigate('/settrip')
      }
    } catch (error) {
      console.error('Error fetching data:', error)
      navigate('/dashboard')
    }
  }
  const handleSubmit = (): void => {
    const amount = standardVehicle
      ? dataInfo?.precioStandar
      : dataInfo?.precioPremiun
    const idConductor = standardVehicle
      ? dataInfo?.idConductorStandar
      : dataInfo?.idConductorPremiun
    const idViaje = dataInfo?.idViaje
    const idUsuario = user?._id

    const infoPayment = {
      idUsuario,
      idConductor,
      idViaje,
      amount,
    }
    localStorage.setItem('infoPayment', JSON.stringify(infoPayment))
    navigate('/payment')
  }

  return (
    <div className='relative flex h-screen flex-col bg-[#F3EDF7]'>
      <Link
        to='/dashboard'
        className='absolute left-7 top-7 z-50 flex h-10 w-10 items-center justify-center rounded-full border bg-[#dfdfdf]'
      >
        <BsArrowLeft />
      </Link>
      <MapView
        geometry={geometry}
        startCoords={startCoords}
        finishCoords={finishCoords}
      />
      <div className='mx-auto flex h-full w-full max-w-sm flex-col justify-center gap-5 p-5'>
        <h1 className='text-lg'>Seleccionar vehiculo</h1>
        <div
          onClick={handleStandardVehicle}
          className={`flex max-w-6xl cursor-pointer items-center justify-between rounded-full border px-4 py-0.5 text-sm shadow-lg ${
            standardVehicle && 'bg-[#29103A40]'
          }`}
        >
          <div className='flex items-center gap-2'>
            <img src={standard} alt='standard vehicle' />
            <div>
              <strong>Estándar</strong>
              <p>7 Vehículos cercanos</p>
            </div>
          </div>
          ${dataInfo?.precioStandar}
        </div>
        <div
          onClick={handlePremiumVehicle}
          className={`flex w-full max-w-6xl cursor-pointer items-center justify-between rounded-full border px-4 py-0.5 text-sm shadow-lg ${
            !standardVehicle && 'bg-[#29103A40]'
          }`}
        >
          <div className='flex items-center gap-2'>
            <img src={premium} alt='premium vehicule' />
            <div>
              <strong>Premium</strong>
              <p>3 Vehículos cercanos</p>
            </div>
          </div>
          ${dataInfo?.precioPremiun}
        </div>
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
        <div className='flex items-center justify-center'>
          <button
            onClick={handleSubmit}
            className='rounded-full bg-primary px-6 py-1.5 text-sm text-white'
          >
            CONTINUAR AL PAGO
          </button>
        </div>
      </div>
    </div>
  )
}
