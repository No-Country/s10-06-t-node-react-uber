import { create } from 'zustand'
import type { typeLocationIQAutocompleteData } from '@/components/common/LocationAutocomplete'

interface typePosiblesLocationState {
  posiblesLocationFrom: 'inputFinishLocation' | 'inputStartLocation' | undefined
  posiblesLocation: typeLocationIQAutocompleteData | undefined
  setPosiblesLocation: (
    newPosiblesLocation: typeLocationIQAutocompleteData | undefined,
  ) => void
}
const usePosiblesLocationStore = create<typePosiblesLocationState>()((set) => ({
  posiblesLocationFrom: undefined,
  posiblesLocation: undefined,
  setPosiblesLocation: (newPosiblesLocation) => {
    set(() => ({
      posiblesLocation: newPosiblesLocation,
    }))
  },
}))

export default usePosiblesLocationStore
