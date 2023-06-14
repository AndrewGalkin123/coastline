import React from "react";
import Header from '../../components/common/Header/Header'
import Footer from '../../components/common/Footer/Footer'
import History from "./components/History/History";
import Culture from "./components/Culture/Culture";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import OdessaMap from "./components/OdessaMap/OdessaMap";
import Slider from "./components/Slider/Slider";

const HomePage = () => {
    return (
        <div>
            <Header></Header>
            <main>
                <Slider></Slider>
                <History></History>
                <Culture></Culture>
                <OdessaMap></OdessaMap>
                <PhotoGallery></PhotoGallery>
            </main>
            <Footer></Footer>
        </div>

        //сделать коллекции в самом низу
    )
}

export default HomePage;