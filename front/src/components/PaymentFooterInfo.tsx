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
    <div className='flex w-full justify-center gap-5 rounded-full bg-[#29103A05] px-4 py-2 text-sm shadow-lg [&>div]:flex [&>div]:gap-2'>
      {amount !== undefined && (
        <>
          <div>
            <img src={marker} alt='route' />
            {(distance / 1000)?.toFixed(1)}
            km
          </div>
          <div>
            <img src={time} alt='travel duration' />
            {(duration / 60)?.toFixed(0)} min
          </div>
          <div>
            <img src={dolar} alt='price' />
            {amount?.toFixed(2)}
          </div>
        </>
      )}
    </div>
  )
}
