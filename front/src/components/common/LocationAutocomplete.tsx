import LocationAutocompleteItems from './LocationAutocompleteItems'
import usePosiblesLocationStore from '@/stateManagement/usePosiblesLocationStore'

export type typeLocationIQAutocompleteData = Array<{
  place_id: number
  osm_id: number
  osm_type: string
  licence: string
  lat: string
  lon: number
  boundingbox: number[]
  class: string
  type: string
  display_name: string
  display_place: string
  display_address: string
  address: {
    name: string
    house_number: number
    road: string
    neighbourhood: string
    suburb: string
    city: string
    state: string
    postcode: string
    country: string
    country_code: string
  }
}>

export const LocationAutocomplete: React.FC = () => {
  const { posiblesLocation } = usePosiblesLocationStore((state) => state)
  if (posiblesLocation) {
    const posiblesLocationElements = posiblesLocation.map(
      (posibleLocation, index) => {
        return (
          <LocationAutocompleteItems
            key={posibleLocation.place_id + index}
            km={5}
            location={posibleLocation.display_address}
            locationName={posibleLocation.display_name}
          />
        )
      },
    )

    return <>{posiblesLocationElements}</>
  }
  return <>Buscando...</>
}
