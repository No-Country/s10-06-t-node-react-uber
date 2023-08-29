import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '@/context/GoogleAuthContext'
import { useEffect, useState } from 'react'

import { BASE_URL } from '@/utils/api'

export const AuthGuard: React.FC = () => {
  const { setUser } = useAuthStore()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

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

  if (loading) return <h1>Loading...</h1>
  if (!isAuthenticated) return <Navigate to='/login' replace />
  return <Outlet />
}
