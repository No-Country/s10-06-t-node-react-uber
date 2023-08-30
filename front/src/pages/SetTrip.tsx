import Container from '../components/layouts/Container'
import { BiArrowBack } from 'react-icons/bi'
import { TbPointFilled } from 'react-icons/tb'
import { GoTriangleDown } from 'react-icons/go'
import { HiLocationMarker } from 'react-icons/hi'
import type React from 'react'

const SetTrip: React.FC = () => {
  return (
    <Container>
      <main className='text-20'>
        <h2 className='flex items-center text-24'>
          <BiArrowBack className='mr-3 text-primary' /> Solicitar un viaje
        </h2>
        <form className='relative my-7'>
          <div className='mb-5 flex items-center'>
            <TbPointFilled className='mr-[4px] text-24 text-primary' />
            <Input inputType='text' inputPlaceholder='¿De dónde salís?' />
          </div>
          <div className='flex items-center'>
            <GoTriangleDown className='mr-[4px] text-24 text-darkGray' />
            <Input inputType='text' inputPlaceholder='¿A dónde te llevamos?' />
          </div>
        </form>
        <section>
          <h5>Resultados</h5>
          <LocationAutocompleteItems
            locationName='Banco Galicia'
            location='Av Rafael Nuñez 3254, Córdoba'
            km={3}
          />
        </section>
      </main>
    </Container>
  )
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

interface ItemsContainerProps {
  children: React.ReactNode
}

// Esté componente, se utiliza para estilizar el contenedor de los items.
const ItemsContainer: React.FC<ItemsContainerProps> = ({ children }) => {
  return (
    <div className='shadow-setTripItems mt-3 grid grid-flow-col grid-cols-[max-content_minmax(min-content,_max-content)_minmax(min-content)] grid-rows-[min-content] items-center rounded-full bg-[#f8f8f8] px-[12px] py-[6px] font-light'>
      {children}
    </div>
  )
}

// interface RecentTripsProps {
//   finishLocation: string
//   km: number
// }

// const RecentTripsItem: React.FC<RecentTripsProps> = ({
//   finishLocation,
//   km,
// }) => {
//   return (
//     <ItemsContainer>
//       <BiTime className='mr-3 text-24' />
//       {finishLocation}
//       <span className='justify-self-end font-bold'>{km} km</span>
//     </ItemsContainer>
//   )
// }

interface InputProps {
  inputType: string
  inputPlaceholder: string
  className?: string
}

const Input: React.FC<InputProps> = ({
  inputType,
  inputPlaceholder,
  className = '',
}) => {
  return (
    <input
      className={`shadow-setTripItems w-full rounded-full border-2 border-solid border-dark px-[12px] py-[6px] placeholder-dark focus:outline-none ${className}`}
      type={inputType}
      placeholder={inputPlaceholder}
    />
  )
}

export default SetTrip
