import { MapView } from '@/components/Map/MapView'
import { useState } from 'react'
import standard from '@/assets/standard.svg'
import premium from '@/assets/premium.svg'
import marker from '@/assets/marker.svg'
import time from '@/assets/time.svg'
import dolar from '@/assets/dolar.svg'
import { BsArrowLeft } from 'react-icons/bs'

export const SelectTrip: React.FC = () => {
  const [standardVehicle, setStandardVehicle] = useState(true)
  const handleStandardVehicle = (): void => {
    setStandardVehicle(true)
  }
  const handlePremiumVehicle = (): void => {
    setStandardVehicle(false)
  }

  return (
    <div className='relative flex h-screen flex-col bg-[#F3EDF7]'>
      <div className='absolute left-7 top-7 z-50 flex h-10 w-10 items-center justify-center rounded-full border bg-[#dfdfdf]'>
        <BsArrowLeft />
      </div>
      <MapView />
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
          $700
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
          $1000
        </div>
        <div className='flex w-full justify-center gap-5 rounded-full bg-[#29103A05] px-4 py-2 text-sm shadow-lg [&>div]:flex [&>div]:gap-2'>
          <div>
            <img src={marker} alt='route' />3 km
          </div>
          <div>
            <img src={time} alt='travel duration' />
            12 min
          </div>
          <div>
            <img src={dolar} alt='price' />
            700
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <button className='rounded-full bg-primary px-6 py-1.5 text-sm text-white'>
            CONTINUAR AL PAGO
          </button>
        </div>
      </div>
    </div>
  )
}
