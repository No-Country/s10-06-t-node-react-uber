import { useState, type FC } from 'react'

import { HiOutlineChevronDown } from 'react-icons/hi'
import { DropdownChip } from './DropdownChip'

export const Dropdown: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ): void => {
    e.target === e.currentTarget && setIsOpen(!isOpen)
  }

  return (
    <>
      <div
        className='rounded-f relative flex cursor-pointer items-center gap-2'
        onClick={handleClick}
      >
        Más{' '}
        <HiOutlineChevronDown
          className='text-lg'
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
          }}
          onClick={handleClick}
        />
      </div>
      <div
        className={`min-h-20 absolute left-28 top-[73px] z-10 flex flex-col gap-4 overflow-hidden rounded-b-md bg-white p-4 text-center text-neutral-400
            ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}
          `}
        style={{
          transition: 'max-height 0.4s ease-in-out, opacity 0.4s',
        }}
      >
        {dropdownOptions.map(({ text, link }) => (
          <DropdownChip key={text} link={link}>
            {text}
          </DropdownChip>
        ))}
      </div>
    </>
  )
}

interface DropdownOptions {
  text: string
  link: string
}

const dropdownOptions: DropdownOptions[] = [
  {
    text: 'About us',
    link: '/',
  },
  {
    text: 'Our offerings',
    link: '/',
  },
  {
    text: 'How Uber Works',
    link: '/',
  },
  {
    text: 'Global citizienship',
    link: '/',
  },
  {
    text: 'Newsroom',
    link: '/',
  },
  {
    text: 'Investor relations',
    link: '/',
  },
  {
    text: 'Blog',
    link: '/',
  },
  {
    text: 'Carrers',
    link: '/',
  },
]
