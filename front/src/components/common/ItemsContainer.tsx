import { Link } from 'react-router-dom'

interface ItemsContainerProps {
  children: React.ReactNode
}

// Esté componente, se utiliza para estilizar el contenedor de los items.
const ItemsContainer: React.FC<ItemsContainerProps> = ({ children }) => {
  return (
    <Link
      to='/select-trip'
      className='mt-3 flex items-center rounded-full bg-[#f8f8f8] px-[12px] py-[6px] font-light shadow-setTripItems'
    >
      {children}
    </Link>
  )
}

export default ItemsContainer
