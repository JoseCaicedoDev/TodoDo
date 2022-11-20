import { Route, Routes } from 'react-router-dom'

import { Login } from '../components/login'
import { Password } from '../components/password'
import { Registre } from '../components/registre'
import { Dashboard } from '../pages/dashboard'

function AppRoute() {
  return (
    <>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Registre />} path="/registro" />
        <Route element={<Password />} path="/password" />
        <Route element={<Dashboard />} path="/das" />
      </Routes>
    </>
  )
}
export default AppRoute
