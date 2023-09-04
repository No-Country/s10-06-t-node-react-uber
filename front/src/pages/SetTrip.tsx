import Container from '../components/layouts/Container'
import { BiArrowBack } from 'react-icons/bi'
import { TbPointFilled } from 'react-icons/tb'
import { GoTriangleDown } from 'react-icons/go'
import { create } from 'zustand'
import { Link } from 'react-router-dom'
import Input from '../components/common/Input'
// import { BASE_URL } from '@/utils/api'
import RecentTripsItem from '@/components/common/RecentTripsItem'
import locationIqApiBaseUrl from '@/utils/locationIqApi'
import locationIqAccessToken from '@/utils/locationIqAccessToken'
import {
  LocationAutocomplete,
  type typeLocationIQAutocompleteData,
  usePosiblesLocationStore,
} from '@/components/common/LocationAutocomplete'
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

const SetTrip: React.FC = () => {
  const { setPosiblesLocation } = usePosiblesLocationStore((state) => state)
  const { locationAutocomplete, activeLocationAutocomplete } = useSetTripStore(
    (state) => state,
  )

  const {
    inputFinishLocationValue,
    inputStartLocationValue,
    setInputFinishLocationValue,
    setInputStartLocationValue,
  } = useSetTripInputsStore((state) => state)

  return (
    <Container>
      <main className='text-20'>
        <h2 className='flex items-center text-24'>
          <Link to='/dashboard' className='flex'>
            <BiArrowBack className='mr-3 text-primary' /> Solicitar un viaje
          </Link>
        </h2>
        <form className='relative my-7'>
          <div className='mb-5 flex items-center'>
            <TbPointFilled className='mr-[4px] text-24 text-primary' />
            <Input
              value={inputStartLocationValue}
              handler={(e: React.ChangeEvent<HTMLInputElement>) => {
                setInputStartLocationValue(e.target.value)
                activeLocationAutocomplete()
              }}
              inputType='text'
              inputPlaceholder='¿De dónde salís?'
              keyDownEventActive={true}
              handlerKeyDownEvent={async (event) => {
                await fetch(
                  `${locationIqApiBaseUrl}/autocomplete?key=${locationIqAccessToken}&q=${inputStartLocationValue}`,
                )
                  .then(async (response) => await response.json())
                  .then((data) => {
                    if (data.error) {
                      throw data.error
                    } else {
                      return data
                    }
                  })
                  .then((data: typeLocationIQAutocompleteData) => {
                    setPosiblesLocation(data)
                  })
                  .catch((error) => {
                    console.log(error)
                  })
              }}
            />
          </div>
          <div className='flex items-center'>
            <GoTriangleDown className='mr-[4px] text-24 text-darkGray' />
            <Input
              value={inputFinishLocationValue}
              handler={async (e: React.ChangeEvent<HTMLInputElement>) => {
                setInputFinishLocationValue(e.target.value)
                activeLocationAutocomplete()
              }}
              inputType='text'
              keyDownEventActive={true}
              handlerKeyDownEvent={async (event) => {
                await fetch(
                  `${locationIqApiBaseUrl}/autocomplete?key=${locationIqAccessToken}&q=${inputFinishLocationValue}`,
                )
                  .then(async (response) => await response.json())
                  .then((data) => {
                    if (data.error) {
                      console.log('error')
                    } else {
                      return data
                    }
                  })
                  .then((data: typeLocationIQAutocompleteData) => {
                    setPosiblesLocation(data)
                  })
                  .catch((error) => {
                    console.log(error)
                  })
              }}
              inputPlaceholder='¿A dónde te llevamos?'
            />
          </div>
        </form>
        <section>
          {locationAutocomplete ? (
            <>
              <h5>Resultados</h5>
              <LocationAutocomplete />
            </>
          ) : (
            <>
              <h5>Recientes</h5>
              <RecentTripsItem finishLocation='Av Colón 3240' km={5} />
              <RecentTripsItem finishLocation='Av Colón 3240' km={5} />
              <RecentTripsItem finishLocation='Av Colón 3240' km={5} />
            </>
          )}
        </section>
      </main>
    </Container>
  )
}

export default SetTrip
