import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Artista from "../componentes/Artista";
import Acerca from "../componentes/Acerca";
import Contacto from "../componentes/Contacto";
import ItemDetailContainer from "../componentes/ItemDetailContainer";
import Cart from "../views/Cart";

import ItemListContainer from "../componentes/ItemListContainer";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/category/:categoryId",
        element: <ItemListContainer/>
    },

    {
        path: "/Cart",
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