import { createBrowserRouter } from "react-router-dom";

//Router de app, aqui van a estar todas las rutas de la app.
export const router = createBrowserRouter([
    {
        path: "/",
        element: <div><h1>Repositorio frontend</h1></div>,
        
        //Aqui cae cuando no existe ruta a la cual acceder.
        errorElement: <div><h1>Error element</h1></div>
    }
])