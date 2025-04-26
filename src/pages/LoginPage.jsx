import { Link } from 'react-router'

const LoginPage = () => {
  return (
    <div className=" flex flex-col items-center h-[400px] justify-center gap-5">
      <h3>Форма входа</h3>
      <form className=" flex flex-col gap-2">
        <input
          className=" border px-2 py-1"
          type="email"
          placeholder="Email"
          required
        />
        <input
          className=" border px-2 py-1"
          type="password"
          placeholder="Пароль"
        />
        <button className=" bg-sky-400 py-1" type="submit">
          Войти
        </button>
      </form>
      <div className=" flex gap-1">
        <p className=" bg-amber-100 p-1 rounded-2xl"> Нет аккаунта?</p>
        <p className=" rounded-2xl bg-green-100 p-1">
          <Link to="/auth/register">Зарегистрируйтесь</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
// import { Link } from "react-router";

// const LoginPage = () => {
//   return (
//     <div>
//       <h3>Форма входа</h3>
//       <form>
//         <input type="email" placeholder="Email" />
//         <input type="password" placeholder="Пароль" />
//         <button>Войти</button>
//       </form>
//       <p>
//         Нет аккаунта?{""}
//         <Link to="/auth/register">Зарегистрируйтесь</Link>
//       </p>
//     </div>
//   );
// };

// export default LoginPage;
