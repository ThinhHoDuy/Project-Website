import React from "react";
import Slide from "../component/header/slider";
import { Banner } from "../component/banner/banner";
import Body from "../component/body/body";
import Footer from "../component/footer/footer"
const HomePage = () => {
    return (
        <>
            <Slide />
            <Banner />
            <Body />
            <Footer/>
        </>
    )
}
export default HomePage;