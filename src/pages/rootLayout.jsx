import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../component/header/header";
// import Footer from "../component/footer/footer"

const RootLayout = () => {
    return (
        <>
            <div><Header /></div>
            <main style={{ marginTop: '77px', marginBottom: '250px' }}>
                <Outlet />
            </main>
            {/* <div><Footer/></div> */}

            
            
            
        </>
    )
}
export default RootLayout