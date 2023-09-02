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

export default ItemsContainer
