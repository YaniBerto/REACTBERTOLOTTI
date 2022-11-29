import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Artista from "../componentes/Artista";
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
        path: "/item/:ItemDetailContainer",
        element: <ItemDetailContainer/>,
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
    {
    path: "Contacto",
    element: <Contacto/>
},
]);