import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Artista from "../componentes/Artista";
import Acerca from "../componentes/Acerca";
import Contacto from "../componentes/Contacto";
import ItemDetailContainer from "../componentes/ItemDetailContainer";
import Cart from "../views/Cart";
import ItemListContainer from "../componentes/ItemListContainer";
import Checkout from "../componentes/Checkout";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/Category/:categoryId",
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
        path: "Checkout",
        element: <Checkout/>
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