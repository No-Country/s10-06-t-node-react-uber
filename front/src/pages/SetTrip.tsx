import Container from '../components/layouts/Container'
import { BiArrowBack } from 'react-icons/bi'
import { TbPointFilled } from 'react-icons/tb'
import { GoTriangleDown } from 'react-icons/go'
import { create } from 'zustand'
import { Link } from 'react-router-dom'
import Input from '../components/common/Input'
import { BASE_URL } from '@/utils/api'
import LocationAutocompleteItems from '@/components/common/LocationAutocompleteItems'
import RecentTripsItem from '@/components/common/RecentTripsItem'
import { OpenStreetMapProvider } from 'leaflet-geosearch'
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
  const { locationAutocomplete, activeLocationAutocomplete } = useSetTripStore(
    (state) => state,
  )

  const provider = new OpenStreetMapProvider()

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
            />
          </div>
          <div className='flex items-center'>
            <GoTriangleDown className='mr-[4px] text-24 text-darkGray' />
            <Input
              value={inputFinishLocationValue}
              handler={async (e: React.ChangeEvent<HTMLInputElement>) => {
                setInputFinishLocationValue(e.target.value)
                activeLocationAutocomplete()
                const leafletGeosearchProviderResults = await provider.search({
                  query: inputFinishLocationValue,
                })
              }}
              inputType='text'
              keyDownEventActive={true}
              handlerKeyDownEvent={async (event) => {
                if (event.key === 'Enter') {
                  const body = {
                    origen: inputStartLocationValue,
                    destino: inputFinishLocationValue,
                    token: localStorage.token,
                  }
                  await fetch(`${BASE_URL}/viajes`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body),
                  })
                    .then(async (response) => await response.json())
                    .then((data) => {
                      console.log(data)
                    })
                    .catch((error) => {
                      console.log(error)
                    })
                }
              }}
              inputPlaceholder='¿A dónde te llevamos?'
            />
          </div>
        </form>
        <section>
          {locationAutocomplete ? (
            <>
              <h5>Resultados</h5>
              <LocationAutocompleteItems
                locationName='Banco Galicia'
                location='Av Rafael Nuñez 3254, Córdoba'
                km={3}
              />
              <LocationAutocompleteItems
                locationName='Banco Galicia'
                location='Av Rafael Nuñez 3254, Córdoba'
                km={3}
              />
              <LocationAutocompleteItems
                locationName='Banco Galicia'
                location='Av Rafael Nuñez 3254, Córdoba'
                km={3}
              />
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
