import { create } from 'zustand'

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
interface typePosiblesLocationState {
  posiblesLocation: typeLocationIQAutocompleteData | undefined
  setPosiblesLocation: (
    newPosiblesLocation: typeLocationIQAutocompleteData,
  ) => void
}
export const usePosiblesLocationStore = create<typePosiblesLocationState>()(
  (set) => ({
    posiblesLocation: undefined,
    setPosiblesLocation: (newPosiblesLocation) => {
      set(() => ({
        posiblesLocation: newPosiblesLocation,
      }))
    },
  }),
)
