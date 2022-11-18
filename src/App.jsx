import { BrowserRouter } from 'react-router-dom'

import './App.css'
import AppRoute from './routes'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </>
  )
}
