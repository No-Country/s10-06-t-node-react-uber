import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { type FC } from 'react'
import { Layout } from '@/components/layouts/Layout'
import { LandingPage } from '@/pages/Landing'
import { Login } from '@/pages/Login'
import { Register } from '@/pages/Register'
import { RegisterCodigo } from '@/pages/RegisterCodigo'
import { RegisterData } from '@/pages/RegisterData'
import { InvoiceModal } from '@/components/InvoiceModal'
import { LogInWithFacebook } from '@/components/LogInWithFacebook'
import { ProtectedRoute } from '@/routes'
import Payment from '@/pages/Payment'

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
        <Route element={<ProtectedRoute />}>
          <Route path='/profile' element={<h1>Profile</h1>} />
        </Route>
        <Route path='/payment' element={<Payment />} />
        <Route path='/modal' element={<InvoiceModal />} />
        <Route path='/facebook' element={<LogInWithFacebook />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesProvider
