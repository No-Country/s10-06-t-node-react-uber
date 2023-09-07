import LocationAutocompleteItems from './LocationAutocompleteItems'
import { usePosiblesLocationStore } from '@/context/usePosibleLocationStore'

export const LocationAutocomplete: React.FC = () => {
  const { posiblesLocation } = usePosiblesLocationStore((state) => state)
  if (posiblesLocation) {
    const posiblesLocationElements = posiblesLocation.map((posibleLocation) => {
      return (
        <LocationAutocompleteItems
          key={posibleLocation.place_id}
          km={5}
          location={posibleLocation.display_address}
          locationName={posibleLocation.display_name}
        />
      )
    })

    return <>{posiblesLocationElements}</>
  }
  return <></>
}
