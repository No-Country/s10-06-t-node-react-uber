import LocationAutocompleteItems from './LocationAutocompleteItems'

interface typePosiblesLocationState {
  posiblesLocation: object[]
  setPosiblesLocation: (newPosiblesLocation: object[]) => void
}
const usePosiblesLocationStore = create<typePosiblesLocationState>()((set) => ({
  posiblesLocation: [{}],
  setPosiblesLocation: (newPosiblesLocation) => {
    set(() => ({
      posiblesLocation: newPosiblesLocation,
    }))
  },
}))
const LocationAutocomplete: React.FC = () => {
  return (
    <LocationAutocompleteItems km={5} location='fasd' locationName='fasd' />
  )
}

export default LocationAutocomplete
