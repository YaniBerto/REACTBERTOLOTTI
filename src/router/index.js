import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Artista from "../componentes/Artista";
import Acerca from "../componentes/Acerca";
import Contacto from "../componentes/Contacto";
import ItemDetailContainer from "../componentes/ItemDetailContainer";
import Cart from "../views/item";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/category/:categoryid",
        element: <App/>
    },
  
    {
        path: "/cart",
        element: <Cart/>
    },
    {
        path: "/item/:id",
        element: <ItemDetailContainer />,
    },
    {
        path: "Artista",
        element: <Artista/>
    },
    {   path: "Acerca",
        element: <Acerca/>
    },
    {
    path: "Contacto",
    element: <Contacto/>
},
]);