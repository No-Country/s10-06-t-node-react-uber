import { HiLocationMarker } from 'react-icons/hi'
import ItemsContainer from './ItemsContainer'

interface LocationAutocompleteProps {
  locationName: string
  location: string
}
const LocationAutocompleteItems: React.FC<LocationAutocompleteProps> = ({
  locationName,
  location,
}) => {
  return (
    <ItemsContainer value={locationName}>
      <HiLocationMarker className='mr-3 min-w-max text-24 text-primary' />
      <p className='flex flex-shrink flex-grow flex-col items-start overflow-hidden text-ellipsis font-light'>
        <span className='block whitespace-nowrap font-bold'>
          {locationName.slice(0, 23)}
        </span>
        <span className='whitespace-nowrap'>{location.slice(0, 27)}</span>
      </p>
    </ItemsContainer>
  )
}

export default LocationAutocompleteItems
