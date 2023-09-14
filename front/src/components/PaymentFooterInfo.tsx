import marker from '@/assets/marker.svg'
import time from '@/assets/time.svg'
import dolar from '@/assets/dolar.svg'

interface PaymentFooterInfoProps {
  amount: number
  distance: number
  duration: number
}

export const PaymentFooterInfo: React.FC<PaymentFooterInfoProps> = ({
  amount,
  distance,
  duration,
}) => {
  return (
    <div className='flex w-full h-[50px] justify-between gap-5 rounded-full bg-[#29103A05] px-4 py-2 text-sm shadow-lg [&>div]:flex [&>div]:gap-2'>
      {amount !== undefined && (
        <>
          <div className='text-12 flex items-center'>
            <img src={marker} alt='route' />
            {(distance / 1000)?.toFixed(1)}
            km
          </div>
          <div className='text-12 flex items-center'>
            <img src={time} alt='travel duration' />
            {(duration / 60)?.toFixed(0)} min
          </div>
          <div className='text-12 flex items-center'>
            <img src={dolar} alt='price' />
            {amount?.toFixed(2)}
          </div>
        </>
      )}
    </div>
  )
}
