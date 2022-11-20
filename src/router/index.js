import {createBrowserRouter} from "react-router-dom";

import App from "../App";
import Category from "../views/Category";
import Item from "../views/item";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/Category/:Category",
        element: <Category/>,
    },
    {
        path: "/item/:ItemDetailContainer",
        element: <Item/>,
    },
]);