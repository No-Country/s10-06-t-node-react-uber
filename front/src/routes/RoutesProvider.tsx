import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { type FC } from 'react'
import { Layout } from '@/components/layouts/Layout'
import { LandingPage } from '@/pages/Landing'
import { Login } from '@/pages/Login'
import { Register } from '@/pages/Register'
import { RegisterCodigo } from '@/pages/RegisterCodigo'
import { RegisterData } from '@/pages/RegisterData'
import { ProtectedRoutes } from '@/routes/ProtectedRoutes'
import Payment from '@/pages/Payment'
import { Dashboard } from '@/pages/Dashboard'

const RoutesProvider: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<LandingPage />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/register-codigo' element={<RegisterCodigo />} />
        <Route path='/register-data' element={<RegisterData />} />
        <Route path='/payment' element={<Payment />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/profile' element={<h1>Profile</h1>} />
          <Route path ='dashboard' element={<Dashboard />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesProvider
