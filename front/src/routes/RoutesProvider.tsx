import { type FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  LandingPage,
  Login,
  Register,
  RegisterCodigo,
  RegisterData,
  UserProfile,
  Payment,
} from '@/pages'
import { Layout } from '@/components/layouts/Layout'
import { ProtectedRoutes } from '@/routes/ProtectedRoutes'
import { Dashboard } from '@/pages/Dashboard'
import { AuthGuard } from './guard'
import SetTrip from '@/pages/SetTrip'

const RoutesProvider: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<LandingPage />} />
        </Route>
        <Route element={<AuthGuard />}>
          <Route path='/profile' element={<UserProfile />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/register-codigo' element={<RegisterCodigo />} />
        <Route path='/register-data' element={<RegisterData />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/settrip' element={<SetTrip />} />
        <Route element={<ProtectedRoutes />}>
          <Route path ='dashboard' element={<Dashboard />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesProvider
