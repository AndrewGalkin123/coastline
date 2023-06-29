import React from "react";
import Header from '../../components/common/Header/Header'
import Footer from '../../components/common/Footer/Footer'
import HistoryBlock from "./HistoryBlock/HistoryBlock";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";

const HistoryPage = () => {
    return (
        <div>
            <Header></Header>
            <HistoryBlock></HistoryBlock>
            <Footer></Footer>
            <BackToTopButton></BackToTopButton>
        </div>
    )
}

export default HistoryPage;