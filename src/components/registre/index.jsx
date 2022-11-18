import { Link } from 'react-router-dom'

import { Button } from '../button'
import { Input } from '../input'

export function Registre() {
  return (
    <>
      <div className="min-h-screen bg-[#252831] grid grid-cols-1 lg:grid-cols-2">
        <div className="text-white flex flex-col items-center justify-center gap-8 p-8 max-w-lg mx-auto">
          {/*           <!-- Titulo con descripción --> */}
          <div className="flex flex-col gap-1 w-full">
            <h1 className="text-4xl font-medium">Crear cuenta</h1>
            <p className="text-gray-400">Registrate en la plataforma</p>
          </div>
          {/*           <!-- Form --> */}
          <form className="flex flex-col gap-4">
            <Input label="Nombre completo *" placeholder="Ingresa tu nombre completo" />
            <Input label="Correo electrónico *" placeholder="Ingresa tu correo electrónico" />
            <Input label="Contraseña *" placeholder="Ingresa tu contraseña" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 order-2 md:order-1">
              <span className="text-gray-400">
                ¿Ya tienes cuenta?{' '}
                <Link className="text-indigo-400 hover:text-indigo-500 transition-colors" to="/">
                  Ingresa
                </Link>
              </span>
              <Link className="text-gray-400 hover:text-gray-200 transition-colors" to="/password">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
            <Button name="Crear cuenta" />
          </form>
        </div>
        {/*         <!-- Imagen de fondo --> */}
        <div className="bg hidden lg:block" />
      </div>
    </>
  )
}
