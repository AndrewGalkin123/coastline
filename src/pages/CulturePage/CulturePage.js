import React from "react";
import Header from '../../components/common/Header/Header'
import Footer from '../../components/common/Footer/Footer'
import CultureBlock from "./CultureBlock/CultureBlock";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";

const CulturePage = () => {
    return (
        <div>
            <Header></Header>
            <CultureBlock></CultureBlock>
            <Footer></Footer>
            <BackToTopButton></BackToTopButton>
        </div>
    )
}

export default CulturePage;