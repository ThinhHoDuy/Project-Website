import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../component/header/header";



const RootLayout = () => {
    return (
        <>
            <div><Header /></div>
            <main style={{marginTop: '77px'}}>
                <Outlet />
            </main>
            
            
        </>
    )
}
export default RootLayout