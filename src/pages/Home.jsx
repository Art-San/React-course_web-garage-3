import { Link } from 'react-router'

export default function Home() {
  return (
    <div className=" flex flex-col items-center gap-4">
      <h1 className="text-2xl font-semibold">Добро пожаловать!</h1>
      <p>Это простое приложение с защищенными маршрутами.</p>
      <div className=" flex gap-3 text-xl">
        <Link className=" bg-amber-100 px-1 rounded" to="/about">
          О нас
        </Link>
        <br />
        <Link className=" bg-amber-100 px-1 rounded" to="/contacts">
          Наши контакты
        </Link>
        <br />
        <Link className=" bg-amber-100 px-1 rounded" to="/login">
          Выйти
        </Link>
      </div>
    </div>
  )
}
