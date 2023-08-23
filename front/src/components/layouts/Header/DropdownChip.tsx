import { type FC } from 'react'

import { useNavigate } from 'react-router-dom'

interface DropdownChipProps {
  children: string
  link: string
}

export const DropdownChip: FC<DropdownChipProps> = ({ children, link }) => {
  const navigate = useNavigate()
  return (
    <div
      className='hover:text-darkGray cursor-pointer font-normal duration-500'
      onClick={() => {
        navigate(link)
      }}
    >
      {children}
    </div>
  )
}
