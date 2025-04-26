import { Link } from 'react-router'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div className=" flex flex-col gap-3">
      <h2>Аутентификация</h2>
      <div className=" flex ">
        <Link className=" px-2 py-1 bg-sky-300" to="login">
          Вход
        </Link>
        <Link className=" px-2 py-1 bg-green-300" to="register">
          Регистрация
        </Link>
      </div>
      <Outlet />
    </div>
  )
}

export default AuthLayout
