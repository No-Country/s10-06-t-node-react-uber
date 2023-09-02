import { BiTime } from 'react-icons/bi'
import ItemsContainer from './ItemsContainer'

interface RecentTripsProps {
  finishLocation: string
  km: number
}
const RecentTripsItem: React.FC<RecentTripsProps> = ({
  finishLocation,
  km,
}) => {
  return (
    <ItemsContainer>
      <BiTime className='mr-3 text-24' />
      {finishLocation}
      <span className='justify-self-end font-bold'>{km} km</span>
    </ItemsContainer>
  )
}

export default RecentTripsItem
