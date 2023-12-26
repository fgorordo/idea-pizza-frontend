import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Provider } from "react-redux";
import { store } from "./store/store";


// Base App - Acá van providers de diferentes tipos para que se apliquen globalmente en la app.
export const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router}>
      </RouterProvider>
    </Provider>
  );
};
