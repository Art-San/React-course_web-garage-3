import { useNavigate } from 'react-router'

const NavigationControls = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button
        className=" border px-1 py-0.5 bg-amber-100"
        onClick={() => navigate(-1)}
      >
        Назад
      </button>
      <button
        className=" border px-1 py-0.5 bg-green-100"
        onClick={() => navigate(1)}
      >
        Вперед
      </button>
      <button
        className=" border px-1 py-0.5 bg-sky-100"
        onClick={() => navigate(-2)}
      >
        На 2 назад
      </button>
      <button
        className=" border px-1 py-0.5 bg-green-100"
        onClick={() => navigate(2)}
      >
        На 2 вперед
      </button>
    </div>
  )
}

export default NavigationControls
