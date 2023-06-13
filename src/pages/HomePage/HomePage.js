import React from "react";
import Header from '../../components/common/Header/Header'
import History from "./components/History/History";
import Culture from "./components/Culture/Culture";

const HomePage = () => { 
    return(
        <div>
            <Header></Header>
            <History></History>
            <Culture></Culture>
        </div>
    )
}

export default HomePage;