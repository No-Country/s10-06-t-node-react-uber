import { useState, type FC } from 'react'

import { HiOutlineChevronDown } from 'react-icons/hi'

export const Dropdown: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      className='flex cursor-pointer items-center gap-2'
      onClick={() => {
        setIsOpen(!isOpen)
      }}
    >
      Más{' '}
      <HiOutlineChevronDown
        className='text-lg'
        style={{
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.2s ease',
        }}
      />
    </div>
  )
}
