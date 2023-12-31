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
import { PaymentCard } from '@/pages/PaymentCards'
import { Payment } from '@/pages/Payment'
import { LookingForDriver } from '@/pages/LookingForDriver'
import { DriverInfo } from '@/pages/DriverInfo'
import { ChargingScreen } from '@/pages/ChargingScreen'
import { AboutUrban } from '@/pages/AboutUrban'

const RoutesProvider: FC = () => {

  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  return (
    <BrowserRouter>
      <Routes>
        {
          isMobile ? (
          <Route path='/' element={<ChargingScreen />} />
        ) : (
          <Route element={<Layout />}>
            <Route path='/' element={<LandingPage />} />
          </Route>
        )}
        <Route element={<AuthGuard />}>
          <Route path='/set-trip' element={<SetTrip />} />
          <Route path='/dashboard/*' element={<Dashboard />} />
          <Route path='/select-trip' element={<SelectTrip />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/payment/cards' element={<PaymentCard />} />
          <Route path='/looking-for-driver' element={<LookingForDriver />} />
          <Route path='/driver-info' element={<DriverInfo />} />
        </Route>
        <Route path='/about-us' element={<AboutUrban />} />
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
