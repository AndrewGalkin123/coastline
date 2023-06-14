import React from "react";
import Header from '../../components/common/Header/Header'
import Footer from '../../components/common/Footer/Footer'
import History from "./components/History/History";
import Culture from "./components/Culture/Culture";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import OdessaMap from "./components/OdessaMap/OdessaMap";

const HomePage = () => { 
    return(
        <div>
            <Header></Header>
            <History></History>
            <Culture></Culture>
            <OdessaMap></OdessaMap>
            <PhotoGallery></PhotoGallery>
            <Footer></Footer>
        </div>
    )
}

export default HomePage;