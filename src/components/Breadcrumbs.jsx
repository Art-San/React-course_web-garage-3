import { useEffect } from 'react'
import { useLocation, Link } from 'react-router'

const Breadcrumbs = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  console.log(123, location.state)

  const pathNamesMap = {
    auth: 'Аутентификация',
    login: 'Вход',
    register: 'Регистрация',
    about: 'О нас',
    contacts: 'Контакты'
  }

  useEffect(() => {
    window.scrollTo(0, 50)
  }, [location.key])

  return (
    <div className=" mt-1 mb-1 text-red-500">
      <Link to="/">Главная</Link>
      {pathnames.map((segment, index) => {
        const path = `/${pathnames.slice(0, index + 1).join('/')}`
        const isLast = index === pathnames.length - 1
        const displayName = pathNamesMap[segment] || segment

        return isLast ? (
          <span key={path}>/{displayName}</span>
        ) : (
          <span key={path}>
            /<Link to={path}>{displayName}</Link>
          </span>
        )
      })}
      {location.state?.breadcrumbInfo && (
        <div className=" text-2xl text-red-500">
          {location.state.breadcrumbInfo}
        </div>
      )}
    </div>
  )
}

export default Breadcrumbs
