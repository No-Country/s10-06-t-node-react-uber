import { create } from 'zustand'

interface typeSetTripInputsState {
  inputStartLocationValue: string
  inputFinishLocationValue: string
  setInputStartLocationValue: (newValue: string) => void
  setInputFinishLocationValue: (newValue: string) => void
}
const useSetTripInputsStore = create<typeSetTripInputsState>()((set) => ({
  inputStartLocationValue: '',
  inputFinishLocationValue: '',
  setInputStartLocationValue: (newValue) => {
    set(() => ({ inputStartLocationValue: newValue }))
  },
  setInputFinishLocationValue: (newValue) => {
    set(() => ({ inputFinishLocationValue: newValue }))
  },
}))

export default useSetTripInputsStore
