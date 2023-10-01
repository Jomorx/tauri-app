import { useLocation, useNavigate, useRoutes } from '@solidjs/router'
import routes from './router'

const App = () => {
  const Route = useRoutes(routes)
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <>
    {routes.map(item=><button onClick={()=>navigate(item.path)}>{item.name}</button>)}
    path:{location.pathname}
      <Route />
    </>
  )
}

export default App
