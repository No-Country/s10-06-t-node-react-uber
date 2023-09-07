import { create } from 'zustand'
import type { typeLocationIQAutocompleteData } from '@/components/common/LocationAutocomplete'

export interface typePosiblesLocationState {
  posiblesLocationFrom: 'inputFinishLocation' | 'inputStartLocation' | undefined
  posiblesLocation: typeLocationIQAutocompleteData | undefined
  setPosiblesLocation: (
    newPosiblesLocation: typeLocationIQAutocompleteData | undefined,
    changePosiblesLocationFrom: typePosiblesLocationState['posiblesLocationFrom'],
  ) => void
}
export const usePosiblesLocationStore = create<typePosiblesLocationState>()(
  (set) => ({
    posiblesLocationFrom: undefined,
    posiblesLocation: undefined,
    setPosiblesLocation: (newPosiblesLocation, changePosiblesLocationFrom) => {
      set(() => ({
        posiblesLocation: newPosiblesLocation,
        posiblesLocationFrom: changePosiblesLocationFrom,
      }))
    },
  }),
)
