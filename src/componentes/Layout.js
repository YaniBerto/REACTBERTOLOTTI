import { CartContextProvider } from "../context/cartContext";
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