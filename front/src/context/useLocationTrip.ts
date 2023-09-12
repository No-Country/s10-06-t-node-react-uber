import { create } from 'zustand'

interface LocationTripStore {
  locationStart: string
  locationEnd: string
  setLocations: (locationStart: string, locationEnd: string) => void
}

export const useLocationTrip = create<LocationTripStore>()((set) => ({
  locationStart: '',
  locationEnd: '',
  setLocations: (locationStart, locationEnd) => {
    set(() => ({
      locationStart,
      locationEnd,
    }))
  },
}))
