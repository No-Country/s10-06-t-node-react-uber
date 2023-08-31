import Container from '../components/layouts/Container'
import { BiArrowBack, BiTime } from 'react-icons/bi'
import { TbPointFilled } from 'react-icons/tb'
import { GoTriangleDown } from 'react-icons/go'
import { HiLocationMarker } from 'react-icons/hi'
import { create } from 'zustand'
import { Link } from "react-router-dom"
import Input from "../components/common/Input"

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

  const {
    inputFinishLocationValue,
    inputStartLocationValue,
    setInputFinishLocationValue,
    setInputStartLocationValue,
  } = useSetTripInputsStore((state) => state)

  function handlerInputStartLocation(
    e: React.ChangeEvent<HTMLInputElement>,
  ): void {
    setInputStartLocationValue(e.target.value)
    activeLocationAutocomplete()
  }

  function handlerInputFinishLocation(
    e: React.ChangeEvent<HTMLInputElement>,
  ): void {
    setInputFinishLocationValue(e.target.value)
    activeLocationAutocomplete()
  }

  interface LocationAutocompleteProps {
    locationName: string
    location: string
    km: number
  }

  const LocationAutocompleteItems: React.FC<LocationAutocompleteProps> = ({
    locationName,
    location,
    km,
  }) => {
    return (
      <ItemsContainer>
        <HiLocationMarker className='mr-3 text-24 text-primary' />
        <p className='overflow-hidden text-ellipsis font-light'>
          <span className='block font-bold'>{locationName}</span>
          <span className='whitespace-nowrap'>{location}</span>
        </p>
        <span className='justify-self-end font-bold'>{km} km</span>
      </ItemsContainer>
    )
  }
  // Esté componente, se utiliza para estilizar el contenedor de los items.
  interface ItemsContainerProps {
    children: React.ReactNode
  }

  // Esté componente, se utiliza para estilizar el contenedor de los items.
  const ItemsContainer: React.FC<ItemsContainerProps> = ({ children }) => {
    return (
      <div className='mt-3 grid grid-flow-col grid-cols-[max-content_minmax(min-content,_max-content)_minmax(min-content)] grid-rows-[min-content] items-center rounded-full bg-[#f8f8f8] px-[12px] py-[6px] font-light shadow-setTripItems'>
        {children}
      </div>
    )
  }

  interface RecentTripsProps {
    finishLocation: string
    km: number
  }

  const RecentTripsItem: React.FC<RecentTripsProps> = ({
    finishLocation,
    km,
  }) => {
    return (
      <ItemsContainer>
        <BiTime className='mr-3 text-24' />
        {finishLocation}
        <span className='justify-self-end font-bold'>{km} km</span>
      </ItemsContainer>
    )
  }

  return (
    <Container>
      <main className='text-20'>
        <h2 className='flex items-center text-24'>
          <Link to="/dashboard" className="flex">
            <BiArrowBack className='mr-3 text-primary' /> Solicitar un viaje
          </Link>
        </h2>
        <form className='relative my-7'>
          <div className='mb-5 flex items-center'>
            <TbPointFilled className='mr-[4px] text-24 text-primary' />
            <Input
              value={inputStartLocationValue}
              handler={handlerInputStartLocation}
              inputType='text'
              inputPlaceholder='¿De dónde salís?'
            />
          </div>
          <div className='flex items-center'>
            <GoTriangleDown className='mr-[4px] text-24 text-darkGray' />
            <Input
              value={inputFinishLocationValue}
              handler={handlerInputFinishLocation}
              inputType='text'
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
