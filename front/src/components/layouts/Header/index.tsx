import { type FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { BsFillGrid3X3GapFill, BsGlobeAmericas } from 'react-icons/bs'
import { Dropdown } from './Dropdown'

export const Header: FC = () => {
  const navigate = useNavigate()
  return (
    <header className='bg-primary text-lightGray flex h-24 select-none px-24 py-5 font-medium'>
      <div className='flex w-full items-center justify-between'>
        <nav className='flex items-center gap-12'>
          <img
            src='src/assets/textLogo.svg'
            alt='Urban Move Logo'
            draggable={false}
            className='cursor-pointer'
            onClick={() => {
              navigate('/')
            }}
          />
          <Dropdown />
          <div className='cursor-pointer'>Ayuda</div>
        </nav>
        <nav className='flex items-center gap-6'>
          <button className='flex cursor-pointer items-center gap-2'>
            <BsFillGrid3X3GapFill />
            Productos
          </button>
          <button className='flex cursor-pointer items-center gap-2'>
            <BsGlobeAmericas />
            Español
          </button>
          <button className='cursor-pointer'>Registrarse</button>
          <button className='bg-lightGray text-dark cursor-pointer rounded-full px-3 py-2'>
            Iniciar Sesión
          </button>
        </nav>
      </div>
    </header>
  )
}
