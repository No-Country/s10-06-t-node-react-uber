import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { type FC } from 'react'
import App from '@/pages/App'
import { Layout } from '@/components/layouts/Layout'
import { LandingPage } from '@/pages/Landing'
import { Login } from '@/pages/Login'
import { Register } from '@/pages/Register'
import { RegisterCodigo } from '@/pages/RegisterCodigo'
import { RegisterData } from '@/pages/RegisterData'

const RoutesProvider: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<App />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/register-codigo' element={<RegisterCodigo email='dikedem668@stypedia.com'/>} />
        <Route path='/register-data' element={<RegisterData />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesProvider
