import { Link, Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2>Аутентификация</h2>
      <div className="flex justify-center gap-1.5">
        <Link to={'login'}>Вход</Link>
        <Link to={'register'}>Регистрация</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default AuthLayout
