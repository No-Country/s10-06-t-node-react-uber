import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '@/context/GoogleAuthContext'
import { useEffect, useState } from 'react'

export const ProtectedRoute = () => {
  const { setUser } = useAuthStore()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkLogin = async () => {
      const token = localStorage.getItem('token')
      if (!token) {
        setIsAuthenticated(false)
        setLoading(false)
        return
      }

      try {
        //Validate Token

        const res = await fetch('http://localhost:1237/protected-route', {
          method: 'POST',
          body: JSON.stringify({
            token: token,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        if (res.status !== 200) {
          setIsAuthenticated(false)
          return setLoading(false)
        }
        setIsAuthenticated(true)
        setLoading(false)

        //Get user info

        const userData = await fetch('http://localhost:1237/users/id', {
          method: 'POST',
          body: JSON.stringify({
            token: token,
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
    checkLogin()
  }, [])

  if (loading) return <h1>Loading...</h1>
  if (!isAuthenticated && !loading) return <Navigate to='/login' replace />
  return <Outlet />
}
