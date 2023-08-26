import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import RoutesProvider from './routes/RoutesProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RoutesProvider />
    <ToastContainer />
  </React.StrictMode>,
)
