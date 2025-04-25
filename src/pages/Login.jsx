import { useNavigate } from 'react-router'

export default function Login({ setIsAuth }) {
  const navigate = useNavigate()

  const handleLogin = () => {
    setIsAuth(true)
    navigate('/contacts')
  }

  const handleLogout = () => {
    setIsAuth(false)
    navigate('/')
  }

  return (
    <div className=" flex flex-col items-center gap-4">
      <h1>Страница логина, войти?</h1>
      <button className=" bg-fuchsia-100 px-2 py-1" onClick={handleLogin}>
        Авторизоваться
      </button>
      <button className=" bg-sky-100 px-2 py-1" onClick={handleLogout}>
        Выйти
      </button>
    </div>
  )
}
