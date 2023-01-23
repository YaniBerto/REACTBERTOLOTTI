import React from "react";

import NavBarComponent from "./NavBar";



export const Layout=({children})=>{
    return(
        <main>
            <NavBarComponent />
            {children}
        </main>

    );
};