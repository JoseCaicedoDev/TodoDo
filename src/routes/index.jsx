import { Route, Routes } from 'react-router-dom'

import { Login } from '../components/login'
import { Password } from '../components/password'
import { Registre } from '../components/registre'

function AppRoute() {
  return (
    <>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Registre />} path="/registro" />
        <Route element={<Password />} path="/password" />
      </Routes>
    </>
  )
}
export default AppRoute
