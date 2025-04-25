import { Link } from 'react-router'

const RegPage = () => {
  return (
    <div className=" flex flex-col items-center h-[400px] justify-center gap-5">
      <h3>Форма регистрации</h3>
      <form className=" flex flex-col gap-2">
        <input className=" border px-2 py-1" type="text" placeholder="Имя" />
        <input className=" border px-2 py-1" type="email" placeholder="Email" />
        <input
          className=" border px-2 py-1"
          type="password"
          placeholder="Пароль"
        />
        <button className=" bg-sky-400 py-1">Войти</button>
      </form>
      <div className=" flex gap-1">
        <p className=" bg-amber-100 p-1 rounded-2xl">Уже есть аккаунт?{''}</p>
        <p className=" rounded-2xl bg-green-100 p-1">
          <Link to="/auth">Войдите</Link>
        </p>
      </div>
    </div>
  )
}

export default RegPage
