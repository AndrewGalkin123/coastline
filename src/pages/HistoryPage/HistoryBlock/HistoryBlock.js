import React, { useState, useEffect } from "react";
import odessaFerrisWheel from "../../../assets/cultureImages/odessa-ferris-wheel.jpg"
import "./HistoryBlock.css"
import squareType from "../../../assets/filters/squares.png"
import listType from "../../../assets/filters/free-icon-checklist-876749.png" 


const HistoryBlock = () => {
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
      return "360° Фото";
    } else {
      return "360° Фото.История";
    }
  };
  return (
    <div>
      <div style={{padding: "0 20px", position: "relative", maxWidth: "1900px", margin: "0 auto",top: "110px"}}>
          <h1 className="headline">{getTitleText()}</h1>
          <div className="filters">
              <a id="square_list_type"><img src={squareType}></img></a>
              <a id="list_type"><img src={listType}></img></a>
          </div>
          
      </div>
      <hr style={{width: "100%", marginTop: "120px",  color: "#dfdfdf", border: "0", borderBottom: "1px solid"}}></hr>
      <div className="content" style={{ maxWidth: "1900px", top: "30px"}}>

        <div className="photo_item_container" style={{ position: "relative", marginBottom: "200px" }}>
          <a className="photo_item">
            <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
            <span className="photo_block-item"></span>
            <span className="photo_item_title">Одесса, Черноморск</span>
          </a>
          <a className="photo_item">
            <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
            <span className="photo_block-item"></span>
            <span className="photo_item_title">Одесса, Черноморск</span>
          </a>
          <a className="photo_item">
            <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
            <span className="photo_block-item"></span>
            <span className="photo_item_title">Одесса, Черноморск</span>
          </a>
          <a className="photo_item">
            <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
            <span className="photo_block-item"></span>
            <span className="photo_item_title">Одесса, Черноморск</span>
          </a>
          <a className="photo_item">
            <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
            <span className="photo_block-item"></span>
            <span className="photo_item_title">Одесса, Черноморск</span>
          </a>
          <a className="photo_item">
            <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
            <span className="photo_block-item"></span>
            <span className="photo_item_title">Одесса, Черноморск</span>
          </a>
          <a className="photo_item">
            <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
            <span className="photo_block-item"></span>
            <span className="photo_item_title">Одесса, Черноморск</span>
          </a>
          <a className="photo_item">
            <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
            <span className="photo_block-item"></span>
            <span className="photo_item_title">Одесса, Черноморск</span>
          </a>
          <a className="photo_item">
            <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
            <span className="photo_block-item"></span>
            <span className="photo_item_title">Одесса, Черноморск</span>
          </a>
          <a className="photo_item">
            <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
            <span className="photo_block-item"></span>
            <span className="photo_item_title">Одесса, Черноморск</span>
          </a>
          <a className="photo_item">
            <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
            <span className="photo_block-item"></span>
            <span className="photo_item_title">Одесса, Черноморск</span>
          </a>
          <a className="photo_item">
            <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
            <span className="photo_block-item"></span>
            <span className="photo_item_title">Одесса, Черноморск</span>
          </a>
          <a className="photo_item">
            <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
            <span className="photo_block-item"></span>
            <span className="photo_item_title">Одесса, Черноморск</span>
          </a>
          <a className="photo_item">
            <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
            <span className="photo_block-item"></span>
            <span className="photo_item_title">Одесса, Черноморск</span>
          </a>
          <a className="photo_item">
            <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
            <span className="photo_block-item"></span>
            <span className="photo_item_title">Одесса, Черноморск</span>
          </a>
          <a className="photo_item">
            <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
            <span className="photo_block-item"></span>
            <span className="photo_item_title">Одесса, Черноморск</span>
          </a>

          <a className="photo_item">
            <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
            <span className="photo_block-item"></span>
            <span className="photo_item_title">Одесса, Черноморск</span>
          </a>
          <a className="photo_item">
            <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
            <span className="photo_block-item"></span>
            <span className="photo_item_title">Одесса, Черноморск</span>
          </a>
          <a className="photo_item">
            <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
            <span className="photo_block-item"></span>
            <span className="photo_item_title">Одесса, Черноморск</span>
          </a>
          <a className="photo_item">
            <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
            <span className="photo_block-item"></span>
            <span className="photo_item_title">Одесса, Черноморск</span>
          </a>
          <a className="photo_item">
            <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
            <span className="photo_block-item"></span>
            <span className="photo_item_title">Одесса, Черноморск</span>
          </a>

          <a className="photo_item">
            <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
            <span className="photo_block-item"></span>
            <span className="photo_item_title">Одесса, Черноморск</span>
          </a>
          <a className="photo_item">
            <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
            <span className="photo_block-item"></span>
            <span className="photo_item_title">Одесса, Черноморск</span>
          </a>
          <a className="photo_item">
            <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
            <span className="photo_block-item"></span>
            <span className="photo_item_title">Одесса, Черноморск</span>
          </a>
          <a className="photo_item">
            <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
            <span className="photo_block-item"></span>
            <span className="photo_item_title">Одесса, Черноморск</span>
          </a>
          <a className="photo_item">
            <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
            <span className="photo_block-item"></span>
            <span className="photo_item_title">Одесса, Черноморск</span>
          </a>
          <a className="photo_item">
            <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
            <span className="photo_block-item"></span>
            <span className="photo_item_title">Одесса, Черноморск</span>
          </a>
          <a className="photo_item">
            <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
            <span className="photo_block-item"></span>
            <span className="photo_item_title">Одесса, Черноморск</span>
          </a>


          <a className="photo_item">
            <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
            <span className="photo_block-item"></span>
            <span className="photo_item_title">Одесса, Черноморск</span>
          </a>
          <a className="photo_item">
            <img className="picture" src={odessaFerrisWheel} alt="descent coast" />
            <span className="photo_block-item"></span>
            <span className="photo_item_title">Одесса, Черноморск</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default HistoryBlock;