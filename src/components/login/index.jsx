import { Link } from 'react-router-dom'

import { Input } from '../input'
import { Button } from '../button'
import { ImgLogin } from '../imgLogin'

export function Login() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const regex =
      "A[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?: [a - z0 - 9](?: [a - z0 - 9 -] * [a - z0 - 9]) ?.) + [a - z0 - 9](?: [a - z0 - 9 -] * [a - z0 - 9]) ?z"

    if (email == '' || password == '') {
      console.log('los datos no puede ser vacios')
    }
    if (email !== '' && !regex.test(email)) {
      console.log('email invalido')
    }
  }

  return (
    <>
      <div className="min-h-screen bg-[#252831] grid grid-cols-1 lg:grid-cols-2">
        <div className="text-white flex flex-col items-center justify-center gap-8 p-8 max-w-lg mx-auto">
          {/* Titulo */}
          <div className="flex flex-col gap-1 w-full">
            <h1 className="text-4xl font-medium">Iniciar sesión</h1>
            <p className="text-gray-400">Ingresa al sistema con tus credenciales</p>
          </div>
          {/* Form */}
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <Input
              label="Correo electrónico *"
              name="email"
              placeholder="Ingresa tu correo electrónico"
              type="text"
            />
            <Input
              label="Contraseña *"
              name="password"
              placeholder="Ingresa tu contraseña"
              type="password"
            />
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 order-2 md:order-1">
              <span className="text-gray-400">
                ¿No tienes cuenta?{' '}
                <Link
                  className="text-indigo-400 hover:text-indigo-500 transition-colors"
                  to="/registro"
                >
                  Registrate
                </Link>
              </span>
              <Link className="text-gray-400 hover:text-gray-200 transition-colors" to="/password">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
            <Button name="Iniciar sesión" />
          </form>
        </div>
        {/* Imagen de fondo */}
        <ImgLogin />
      </div>
    </>
  )
}
