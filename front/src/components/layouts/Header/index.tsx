import { type FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { BsFillGrid3X3GapFill, BsGlobeAmericas } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import { Dropdown } from './Dropdown'

import { useAuthStore } from '@/context/GoogleAuthContext'
import { BASE_URL } from '@/utils/api'

export const Header: FC = () => {
  const { setUser, user } = useAuthStore()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const checkLogin = async (): Promise<void> => {
      const token = localStorage.getItem('token')
      if (!token) {
        setIsAuthenticated(false)
        setLoading(false)
        return
      }

      try {
        const res = await fetch(`${BASE_URL}/protected-route`, {
          method: 'POST',
          body: JSON.stringify({
            token,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (res.status !== 200) {
          setIsAuthenticated(false)
          setLoading(false)
          return
        }

        setIsAuthenticated(true)
        setLoading(false)

        const userData = await fetch(`${BASE_URL}/users/id`, {
          method: 'POST',
          body: JSON.stringify({
            token,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        const userInfo = await userData.json()
        setUser(userInfo)
      } catch (error) {
        setIsAuthenticated(false)
        setLoading(false)
      }
    }
    void checkLogin()
  }, [setUser])

  return (
    <header className='flex h-24 select-none bg-primary px-6 py-5 font-medium text-lightGray transition-all duration-300 sm:px-12 lg:px-24'>
      <div className='flex w-full items-center justify-between'>
        <nav className='relative flex items-center gap-4'>
          <img
            src='src/assets/textLogo.svg'
            alt='Urban Move Logo'
            draggable={false}
            className='mr-10 cursor-pointer'
            onClick={() => {
              navigate('/')
            }}
          />
          <Dropdown />
          <div className='hidden cursor-pointer rounded-full px-2 py-1 duration-300 hover:bg-white hover:bg-opacity-10 lg:block'>
            Ayuda
          </div>
        </nav>
        {!loading && (
          <>
            <nav className='mr-7 flex items-center gap-4'>
              <button className='hidden cursor-pointer items-center gap-2 rounded-full px-2 py-1 duration-300 hover:bg-white hover:bg-opacity-10 lg:flex'>
                <BsFillGrid3X3GapFill />
                Servicios
              </button>
              <button className='hidden cursor-pointer items-center gap-2 rounded-full px-2 py-1 duration-300 hover:bg-white hover:bg-opacity-10 lg:flex'>
                <BsGlobeAmericas />
                Español
              </button>
              {isAuthenticated ? (
                <img
                  // https://avatar.oxro.io/avatar.svg?name=John+Smith&background=0693e3&color=000
                  src={`https://avatar.oxro.io/avatar.svg?name=${user?.firstName}+${user?.lastName}&background=0693e3&color=000&length=2`}
                  alt='Profile'
                  className='border-whit h-10 w-10 cursor-pointer rounded-full border-2'
                  onClick={() => {
                    navigate('/profile')
                  }}
                />
              ) : (
                <>
                  <button
                    className='cursor-pointer rounded-full px-2 py-1 text-sm duration-300 hover:bg-white hover:bg-opacity-10 sm:text-base'
                    onClick={() => {
                      navigate('/register')
                    }}
                  >
                    Registrarse
                  </button>
                  <button
                    className='cursor-pointer rounded-full bg-lightGray px-3 py-2 text-sm text-dark duration-500 hover:bg-opacity-70 sm:text-base'
                    onClick={() => {
                      navigate('/login')
                    }}
                  >
                    Iniciar Sesión
                  </button>
                </>
              )}
              <button className='absolute right-2 flex items-center rounded-full px-2 py-1 duration-300 hover:bg-white hover:bg-opacity-10 sm:pr-6 lg:hidden'>
                <AiOutlineMenu className='text-2xl' />
              </button>
            </nav>
          </>
        )}
      </div>
    </header>
  )
}
