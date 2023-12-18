import { RouterProvider } from "react-router-dom"

import { router } from "./router";

// Base App - Acá van providers de diferentes tipos para que se apliquen globalmente en la app.
export const App = () => {
  return (
    <RouterProvider  router={router}/>
  )
}
