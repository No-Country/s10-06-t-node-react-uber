import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '@/context/AuthContext'
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
        const res = await fetch('http://localhost:1237/protectedRoute', {
          method: 'POST',
          body: JSON.stringify({
            token: token,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }) //fetch para validar el token
        const data = await res.json()
        console.log(data)
        if (res.status !== 200) {
          setIsAuthenticated(false)
          return setLoading(false)
        }
        setIsAuthenticated(true)
        setLoading(false)
        // setUser(res.data) //fetch para obtener los datos del usuario y guardarlos en user
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
