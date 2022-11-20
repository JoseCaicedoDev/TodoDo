import { Link } from 'react-router-dom'

import { Button } from '../button'
import { ImgLogin } from '../imgLogin'
import { Input } from '../input'

export function Password() {
  return (
    <>
      <div className="min-h-screen bg-[#252831] grid grid-cols-1 lg:grid-cols-2">
        <div className="text-white flex flex-col items-center justify-center gap-8 p-8 max-w-lg mx-auto">
          {/* Titulo con descripción */}
          <div className="flex flex-col gap-1 w-full">
            <h1 className="text-4xl font-medium">Olvido Contraseña</h1>
            <p className="text-gray-400">Ingresa los datos para recuperar contraseña</p>
          </div>
          {/* Form */}
          <form className="flex flex-col gap-4">
            <Input label="Correo electrónico *" placeholder="Ingresa tu correo electrónico" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 order-2 md:order-1">
              <span className="text-gray-400">
                ¿Ya tienes cuenta?{' '}
                <Link className="text-indigo-400 hover:text-indigo-500 transition-colors" to="/">
                  Ingresa
                </Link>
              </span>
            </div>
            <Button name="Enviar contraseña" />
          </form>
        </div>
        {/* Imagen de fondo */}
        <ImgLogin />
      </div>
    </>
  )
}
