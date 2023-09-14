import { FaLocationDot } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

export const FinishTripModal: React.FC = () => {
  const navigate = useNavigate()
  const handleClick = (): void => {
    localStorage.removeItem('TripInfo')
    localStorage.removeItem('geometry')
    localStorage.removeItem('startCoords')
    localStorage.removeItem('finishCoords')
    localStorage.removeItem('infoPayment')
    localStorage.removeItem('startLocation')
    localStorage.removeItem('finishLocation')
    navigate('/dashboard')
  }
  return (
    <div className='mx-auto flex w-fit flex-col items-center justify-center gap-5 rounded border border-darkGray bg-slate-200 px-12 py-12 shadow-3xl'>
      <div>
        <FaLocationDot className='rounded-full bg-primary p-2 text-5xl text-white' />
      </div>
      <div>
        <h1 className='text-lg font-medium'>Llegaste a tu destino</h1>
        <p className='text-sm text-slate-600'>Nos vemos la proxima 😃</p>
      </div>
      <button
        onClick={handleClick}
        className='rounded-full bg-primary px-5 py-1 text-white'
      >
        Continuar
      </button>
    </div>
  )
}
