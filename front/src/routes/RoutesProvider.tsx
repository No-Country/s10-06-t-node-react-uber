import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { type FC } from 'react'
import { Layout } from '@/components/layouts/Layout'
import { LandingPage } from '@/pages/Landing'

const RoutesProvider: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesProvider
