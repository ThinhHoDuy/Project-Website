import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../component/header/header";
// import Footer from "../component/footer/footer";

const RootLayout = () => {
    return (
        <>
            <div style={{ paddingBottom: '100px' }}><Header /></div>
            <main>
                <Outlet />
            </main>
        </>
    )
}
export default RootLayout