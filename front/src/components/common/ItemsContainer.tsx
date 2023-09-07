interface ItemsContainerProps {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

// Esté componente, se utiliza para estilizar el contenedor de los items.
const ItemsContainer: React.FC<ItemsContainerProps> = ({
  children,
  onClick,
}) => {
  return (
    <button
      onClick={(event) => {
        if (onClick) {
          onClick(event)
        }
      }}
      className='mt-3 flex items-center rounded-full bg-[#f8f8f8] px-[12px] py-[6px] font-light shadow-setTripItems'
    >
      {children}
    </button>
  )
}

export default ItemsContainer
