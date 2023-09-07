import { type FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  LandingPage,
  Login,
  Register,
  RegisterCodigo,
  RegisterData,
  ForgotPassword,
  SelectTrip,
} from '@/pages'
import { Layout } from '@/components/layouts/Layout'
import { Dashboard } from '@/pages/Dashboard'
import SetTrip from '@/pages/SetTrip'
import { AuthGuard } from './guard/AuthGuard'

const RoutesProvider: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<LandingPage />} />
        </Route>
        <Route element={<AuthGuard />}>
          <Route path='/settrip' element={<SetTrip />} />
          <Route path='/dashboard/*' element={<Dashboard />} />
          <Route path='/select-trip' element={<SelectTrip />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/change-password' element={<ForgotPassword />} />
        <Route path='/register' element={<Register />} />
        <Route path='/register-codigo' element={<RegisterCodigo />} />
        <Route path='/register-data' element={<RegisterData />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesProvider
