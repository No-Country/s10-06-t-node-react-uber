import { usePosiblesLocationStore } from '@/context/usePosibleLocationStore'
import { useSetTripInputsStore } from '@/pages/SetTrip'

interface ItemsContainerProps {
  children: React.ReactNode
  handler?: () => void
  value: string
}

// Esté componente, se utiliza para estilizar el contenedor de los items.
const ItemsContainer: React.FC<ItemsContainerProps> = ({
  children,
  handler,
  value,
}) => {
  const { posiblesLocationFrom } = usePosiblesLocationStore((state) => state)
  const { setInputFinishLocationValue, setInputStartLocationValue } =
    useSetTripInputsStore((state) => state)

  return (
    <button
      value={value}
      onClick={() => {
        console.log(value)
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
