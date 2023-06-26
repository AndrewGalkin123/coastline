import React, { useState, useEffect } from "react";
import "./PhotoGalleryPage.css"
import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer/Footer";
import odessaFerrisWheel from "../../assets/cultureImages/odessa-ferris-wheel.jpg"

const PhotoGalleryPage = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  


    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const getTitleText = () => {
        if (windowWidth <= 500) {
            return "Лучшие коллекции";
        } else {
            return "360° Фотогалерея.Лучшие коллекции";
        }
    };
    return (
        <div>
            <Header></Header>

            <div
                style={{
                    padding: "0 20px",
                    position: "relative",
                    maxWidth: "1900px",
                    margin: "0 auto",
                    top: "110px"
                }}
            >
                <h1 className="headline">{getTitleText()}</h1>
            </div>
            <hr
                style={{
                    width: "100%",
                    marginTop: "120px",
                    color: "#dfdfdf",
                    border: "0",
                    borderBottom: "1px solid"
                }}
            ></hr>
            <div className="content" style={{ maxWidth: "1900px", top: "30px" }}>

                <div
                    className="photo_item_container"
                    style={{ position: "relative", marginBottom: "100px" }}
                >
                    <a className="photo_item" style={{width: "10%", minHeight: "230px", minWidth: "230px"}}>
                        <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
                        <span className="photo_block-item"></span>
                        <span className="photo_item_title">Одесса, Черноморск</span>
                    </a>
                    <a className="photo_item" style={{width: "10%", minHeight: "230px", minWidth: "230px"}}>
                        <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
                        <span className="photo_block-item"></span>
                        <span className="photo_item_title">Одесса, Черноморск</span>
                    </a>
                    <a className="photo_item" style={{width: "10%", minHeight: "230px", minWidth: "230px"}}>
                        <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
                        <span className="photo_block-item"></span>
                        <span className="photo_item_title">Одесса, Черноморск</span>
                    </a>
                    <a className="photo_item" style={{width: "10%", minHeight: "230px", minWidth: "230px"}}>
                        <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
                        <span className="photo_block-item"></span>
                        <span className="photo_item_title">Одесса, Черноморск</span>
                    </a>
                    <a className="photo_item" style={{width: "10%", minHeight: "230px", minWidth: "230px"}}>
                        <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
                        <span className="photo_block-item"></span>
                        <span className="photo_item_title">Одесса, Черноморск</span>
                    </a>
                    <a className="photo_item" style={{width: "10%", minHeight: "230px", minWidth: "230px"}}>
                        <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
                        <span className="photo_block-item"></span>
                        <span className="photo_item_title">Одесса, Черноморск</span>
                    </a>
                    <a className="photo_item" style={{width: "10%", minHeight: "230px", minWidth: "230px"}}>
                        <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
                        <span className="photo_block-item"></span>
                        <span className="photo_item_title">Одесса, Черноморск</span>
                    </a>
                    <a className="photo_item" style={{width: "10%", minHeight: "230px", minWidth: "230px"}}>
                        <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
                        <span className="photo_block-item"></span>
                        <span className="photo_item_title">Одесса, Черноморск</span>
                    </a>
                    <a className="photo_item" style={{width: "10%", minHeight: "230px", minWidth: "230px"}}>
                        <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
                        <span className="photo_block-item"></span>
                        <span className="photo_item_title">Одесса, Черноморск</span>
                    </a>
                    <a className="photo_item" style={{width: "10%", minHeight: "230px", minWidth: "230px"}}>
                        <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
                        <span className="photo_block-item"></span>
                        <span className="photo_item_title">Одесса, Черноморск</span>
                    </a>
                    <a className="photo_item" style={{width: "10%", minHeight: "230px", minWidth: "230px"}}>
                        <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
                        <span className="photo_block-item"></span>
                        <span className="photo_item_title">Одесса, Черноморск</span>
                    </a>
                    <a className="photo_item" style={{width: "10%", minHeight: "230px", minWidth: "230px"}}>
                        <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
                        <span className="photo_block-item"></span>
                        <span className="photo_item_title">Одесса, Черноморск</span>
                    </a>
                    <a className="photo_item" style={{width: "10%", minHeight: "230px", minWidth: "230px"}}>
                        <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
                        <span className="photo_block-item"></span>
                        <span className="photo_item_title">Одесса, Черноморск</span>
                    </a>
                    <a className="photo_item" style={{width: "10%", minHeight: "230px", minWidth: "230px"}}>
                        <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
                        <span className="photo_block-item"></span>
                        <span className="photo_item_title">Одесса, Черноморск</span>
                    </a>
                    <a className="photo_item" style={{width: "10%", minHeight: "230px", minWidth: "230px"}}>
                        <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
                        <span className="photo_block-item"></span>
                        <span className="photo_item_title">Одесса, Черноморск</span>
                    </a>
                    <a className="photo_item" style={{width: "10%", minHeight: "230px", minWidth: "230px"}}>
                        <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
                        <span className="photo_block-item"></span>
                        <span className="photo_item_title">Одесса, Черноморск</span>
                    </a>
                    <a className="photo_item" style={{width: "10%", minHeight: "230px", minWidth: "230px"}}>
                        <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
                        <span className="photo_block-item"></span>
                        <span className="photo_item_title">Одесса, Черноморск</span>
                    </a>
                    <a className="photo_item" style={{width: "10%", minHeight: "230px", minWidth: "230px"}}>
                        <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
                        <span className="photo_block-item"></span>
                        <span className="photo_item_title">Одесса, Черноморск</span>
                    </a>
                    <a className="photo_item" style={{width: "10%", minHeight: "230px", minWidth: "230px"}}>
                        <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
                        <span className="photo_block-item"></span>
                        <span className="photo_item_title">Одесса, Черноморск</span>
                    </a>
                    <a className="photo_item" style={{width: "10%", minHeight: "230px", minWidth: "230px"}}>
                        <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
                        <span className="photo_block-item"></span>
                        <span className="photo_item_title">Одесса, Черноморск</span>
                    </a>
                    <a className="photo_item" style={{width: "10%", minHeight: "230px", minWidth: "230px"}}>
                        <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
                        <span className="photo_block-item"></span>
                        <span className="photo_item_title">Одесса, Черноморск</span>
                    </a>
                    <a className="photo_item" style={{width: "10%", minHeight: "230px", minWidth: "230px"}}>
                        <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
                        <span className="photo_block-item"></span>
                        <span className="photo_item_title">Одесса, Черноморск</span>
                    </a>
                    <a className="photo_item" style={{width: "10%", minHeight: "230px", minWidth: "230px"}}>
                        <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
                        <span className="photo_block-item"></span>
                        <span className="photo_item_title">Одесса, Черноморск</span>
                    </a>
                    <a className="photo_item" style={{width: "10%", minHeight: "230px", minWidth: "230px"}}>
                        <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
                        <span className="photo_block-item"></span>
                        <span className="photo_item_title">Одесса, Черноморск</span>
                    </a>
                    <a className="photo_item" style={{width: "10%", minHeight: "230px", minWidth: "230px"}}>
                        <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
                        <span className="photo_block-item"></span>
                        <span className="photo_item_title">Одесса, Черноморск</span>
                    </a>
                    <a className="photo_item" style={{width: "10%", minHeight: "230px", minWidth: "230px"}}>
                        <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
                        <span className="photo_block-item"></span>
                        <span className="photo_item_title">Одесса, Черноморск</span>
                    </a>
                    <a className="photo_item" style={{width: "10%", minHeight: "230px", minWidth: "230px"}}>
                        <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
                        <span className="photo_block-item"></span>
                        <span className="photo_item_title">Одесса, Черноморск</span>
                    </a>
                    <a className="photo_item" style={{width: "10%", minHeight: "230px", minWidth: "230px"}}>
                        <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
                        <span className="photo_block-item"></span>
                        <span className="photo_item_title">Одесса, Черноморск</span>
                    </a>

                </div>


            </div>

            <Footer></Footer>
        </div>
    )
}

export default PhotoGalleryPage;