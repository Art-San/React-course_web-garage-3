import { Link } from 'react-router'

const HomePage = () => {
  return (
    <div className=" flex flex-col gap-5">
      <h1>Главная страница</h1>
      <div className=" flex gap-1.5 text-green-500">
        <Link to="/about" state={{ breadcrumbInfo: 'Нашей компании 10 лет!' }}>
          О нас
        </Link>
        <br />
        <Link to={'/auth'}>Войти</Link>
      </div>
    </div>
  )
}

export default HomePage
