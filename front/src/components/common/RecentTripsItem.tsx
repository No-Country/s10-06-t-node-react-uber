import { BiTime } from 'react-icons/bi'
import ItemsContainer from './ItemsContainer'

interface RecentTripsProps {
  finishLocation: string
}
const RecentTripsItem: React.FC<RecentTripsProps> = ({
  finishLocation
}) => {
  return (
    <ItemsContainer value={finishLocation}>
      <BiTime className='mr-3 text-24' />
      <span className='flex-shrink flex-grow'>{finishLocation}</span>
    </ItemsContainer>
  )
}

export default RecentTripsItem
