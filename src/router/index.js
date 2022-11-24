import {createBrowserRouter} from "react-router-dom";

import App from "../App";
import ItemDetailContainer from "../componentes/ItemDetailContainer";
import ItemListContainer from "../componentes/ItemListContainer";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/category/:categoryid",
        element: <ItemListContainer/>
    },
    {
        path: "/item/:ItemDetailContainer",
        element: <ItemDetailContainer/>,
    },
]);