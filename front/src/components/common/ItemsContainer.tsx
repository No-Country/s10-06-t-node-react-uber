interface ItemsContainerProps {
  children: React.ReactNode
  handler?: () => void
}

// Esté componente, se utiliza para estilizar el contenedor de los items.
const ItemsContainer: React.FC<ItemsContainerProps> = ({
  children,
  handler,
}) => {
  return (
    <button
      onClick={() => {
        if (handler) {
          handler()
        }
      }}
      className='mt-3 flex w-full items-center rounded-full bg-[#f8f8f8] px-[12px] py-[6px] font-light shadow-setTripItems'
    >
      {children}
    </button>
  )
}

export default ItemsContainer
