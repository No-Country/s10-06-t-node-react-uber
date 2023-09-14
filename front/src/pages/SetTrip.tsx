import Container from '../components/layouts/Container'
import { create } from 'zustand'
import { useNavigate } from 'react-router-dom'
import Input from '../components/common/Input'
import { useLocationTrip } from '@/context/useLocationTrip'
import { LocationAutocomplete } from '@/components/common/LocationAutocomplete'
import { usePosiblesLocationStore } from '@/context/usePosibleLocationStore'
import locationIqAutocomplete from '@/utils/locationIqAutocomplete'
import useSetTripInputsStore from '@/context/useSetTripInputsStore'
import ruta from '@/assets/img/ruta.png'
import { HeaderTitle } from '@/components/AccountManager/HeaderTitle'

interface typeSetTripState {
  locationAutocomplete: boolean
  activeLocationAutocomplete: () => void
}
const useSetTripStore = create<typeSetTripState>()((set) => ({
  locationAutocomplete: false,
  activeLocationAutocomplete: () => {
    set(() => ({ locationAutocomplete: true }))
  },
}))

const SetTrip: React.FC = () => {
  const { setPosiblesLocation } = usePosiblesLocationStore((state) => state)
  const { activeLocationAutocomplete } = useSetTripStore(
    (state) => state,
  )
  const navigate = useNavigate()
  const { setLocations } = useLocationTrip()
  const {
    inputFinishLocationValue,
    inputStartLocationValue,
    setInputFinishLocationValue,
    setInputStartLocationValue,
  } = useSetTripInputsStore((state) => state)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (inputStartLocationValue && inputFinishLocationValue) {
      setLocations(inputStartLocationValue, inputFinishLocationValue)
      localStorage.setItem('startLocation', inputStartLocationValue)
      localStorage.setItem('finishLocation', inputFinishLocationValue)
      navigate('/select-trip')
    }
  }

  const setAddress = (): void =>{
    setInputStartLocationValue(localStorage.getItem('startLocation'))
  }

  return (
    <Container>
      <main className='h-full text-20 pt-2 px-5'>
        <HeaderTitle link={'/dashboard'} title={'Solicitar un viaje'}/>
        <form className='w-full h-full relative my-7' onSubmit={handleSubmit}>
          <div className='flex gap-5 items-center'>
            <img src={ruta} alt="icon-ruta"/>
            <div className='flex flex-col w-full gap-5'>
              <div className='flex'>
                <Input
                  value={inputStartLocationValue}
                  handler={async (e: React.ChangeEvent<HTMLInputElement>) => {
                    setInputStartLocationValue(e.target.value)
                    activeLocationAutocomplete()
                    await locationIqAutocomplete(
                      'inputStartLocation',
                      inputStartLocationValue,
                      setPosiblesLocation,
                        )
                      }}
                  inputType='text'
                  inputPlaceholder='¿De dónde salís?'
                  keyDownEventActive={true}
                />
                <p onClick={setAddress}><strong>U</strong></p>
              </div>
              <Input
                value={inputFinishLocationValue}
                handler={async (e: React.ChangeEvent<HTMLInputElement>) => {
                  setInputFinishLocationValue(e.target.value)
                  activeLocationAutocomplete()
                  await locationIqAutocomplete(
                    'inputFinishLocation',
                    inputFinishLocationValue,
                    setPosiblesLocation,
                  )
                }}
                inputType='text'
                inputPlaceholder='¿A dónde te llevamos?'
              />
            </div>
          </div>
          <h2 className='pt-8'>Resultados</h2>
          <div className='w-full h-[50vh] overflow-auto mt-5'>
            <LocationAutocomplete />          
          </div>
          <div className='flex justify-center pt-6'>
            <button type='submit' className='bg-[#29103A] w-[193px] h-[32px] 
                uppercase rounded-3xl text-[14px] text-white'
            > 
              confirmar viaje
            </button>
          </div>
        </form>
      </main>
    </Container>
  )
}

export default SetTrip
