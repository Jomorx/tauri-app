import { RouteDefinition } from "@solidjs/router"
import Login from "../pages/Login"
import Home from "../pages/Home"
export type  IRouteDefinition  =   {
    name :string
} & RouteDefinition

const routes: IRouteDefinition[] = [
  {
    name:'login',
    path: "/login",
    component: Login
  },
  {
    name: 'home',
    path: "/home",
    component: Home
  }
]

export default routes