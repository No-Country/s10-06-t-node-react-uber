import { HiLocationMarker } from 'react-icons/hi'

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
      <HiLocationMarker className='mr-3 text-24 text-primary' />
      <p className='overflow-hidden text-ellipsis font-light'>
        <span className='block font-bold'>{locationName}</span>
        <span className='whitespace-nowrap'>{location}</span>
      </p>
      <span className='justify-self-end font-bold'>{km} km</span>
    </ItemsContainer>
  )
}

export default LocationAutocompleteItems
