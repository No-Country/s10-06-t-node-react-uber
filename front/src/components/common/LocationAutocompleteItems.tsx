import { HiLocationMarker } from 'react-icons/hi'
import ItemsContainer from './ItemsContainer'

interface LocationAutocompleteProps {
  locationName: string
  location: string
  km: number
}
const LocationAutocompleteItems: React.FC<LocationAutocompleteProps> = ({
  locationName,
  location,
  km,
}) => {
  return (
    <ItemsContainer>
      <HiLocationMarker className='mr-3 min-w-max text-24 text-primary' />
      <p className='flex-shrink flex-grow overflow-hidden text-ellipsis font-light'>
        <span className='block whitespace-nowrap font-bold'>
          {locationName}
        </span>
        <span className='whitespace-nowrap'>{location}</span>
      </p>
      <span className='ml-3 min-w-max justify-self-end font-bold'>{km} km</span>
    </ItemsContainer>
  )
}

export default LocationAutocompleteItems
