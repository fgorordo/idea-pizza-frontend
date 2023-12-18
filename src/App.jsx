import { RouterProvider } from "react-router-dom"

import { router } from "./router";

import { config } from "./config"

export const App = () => {
  console.log(config)
  return (
    <RouterProvider  router={router}/>
  )
}
