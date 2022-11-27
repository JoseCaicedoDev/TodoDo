import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { unsetUser } from '../../reducers/users/userSlice'
import { Input } from '../input'
import imgUser from '../../assets/user.svg'
export function Sidebar() {
  const user = useSelector((state) => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(unsetUser())
    navigate('/')
  }

  return (
    <>
      <div className="flex flex-col justify-between gap-8 bg-[#252831] min-h-screen max-h-screen w-80 p-4">
        {/* Top */}
        <section>
          {/* Logo */}
          <div className="logo flex items-center gap-4 mb-8">
            <img className="w-10 h-10 bg-gray-500 p-2 rounded-full" src={imgUser} />
            <div>
              <h3 className="font-bold text-white">{user.lastName}</h3>
            </div>
          </div>
          {/* Search */}
          <form className="text-white">
            <Input placeholder="Buscador" />
          </form>
          <ul className="mt-4 mb-8 ">
            <li>
              <a
                className="flex items-center gap-4 p-2 hover:bg-gray-200 transition-colors rounded-lg text-white hover:text-gray-800"
                href="#"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Ordenar por prioridad</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-4 p-2 hover:bg-gray-200 transition-colors rounded-lg text-white hover:text-gray-800"
                href="#"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Ordenar por estado</span>
              </a>
            </li>
          </ul>
          <hr className="my-8" />
          <h5 className="uppercase font-bold text-xs text-white tracking-[2px] mb-4">Tareas</h5>
          <ul>
            <li>
              <a
                className="flex items-center gap-4 p-2 hover:bg-gray-200 transition-colors rounded-lg text-white hover:text-gray-800"
                href="#"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Crear</span>
              </a>
            </li>
          </ul>
        </section>
        {/* Bottom */}
        <section>
          {/* Settings */}
          <ul className="my-4">
            <li>
              <a
                className="flex items-center gap-4 p-2 text-gray-500 hover:bg-gray-200 transition-colors rounded-lg"
                href="#"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Ayuda</span>
              </a>
            </li>
            <li className="text-center">
              <button
                className="block w-full p-2 text-gray-500 hover:bg-gray-200 transition-colors rounded-lg"
                href="#"
                onClick={handleLogout}
              >
                Salir
              </button>
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
