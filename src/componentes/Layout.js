import { CartContextProvider } from "../context/CartContext";
import NavBarComponent from "./NavBar";



export const Layout=({children})=>{
    return(
        <main>
            <CartContextProvider>
            <NavBarComponent />
            {children}
        </CartContextProvider>
        </main>

    );
};