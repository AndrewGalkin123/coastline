import React from "react";
import Footer from "../../components/common/Footer/Footer";
import Header from "../../components/common/Header/Header";
import AboutBlock from "./AboutBlock/AboutBlock";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";

const AboutPage = () => {
    return (
        <div>
            <Header></Header>
            <AboutBlock></AboutBlock>
            <Footer></Footer>
            <BackToTopButton></BackToTopButton>
        </div>
    )
}

export default AboutPage;