import { Link } from 'react-router'

const NotFoundPage = () => {
  return (
    <div>
      <h1>Ничего не найдено. Ошибка 404</h1>
      <Link to={'/'}>На главную</Link>
      <br />
    </div>
  )
}

export default NotFoundPage
