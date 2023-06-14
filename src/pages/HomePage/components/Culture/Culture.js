import React, { useState, useEffect } from "react";
import "./Culture.css";
import RedirectButton from "../../../../components/RedirectButton/RedirectButton";
import odessaFerrisWheel from "../../../../assets/cultureImages/odessa-ferris-wheel.jpg";

const Culture = () => {
  const [photoItemHeight, setPhotoItemHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", photoUpdate);
    photoUpdate();

    return () => {
      window.removeEventListener("resize", photoUpdate);
    };
  }, []);

  const photoUpdate = () => {
    const photoItemElement = document.querySelector("#culture_photos_index .photo_item");
    if (photoItemElement) {
      const newPhotoItemHeight = photoItemElement.clientHeight;
      if (newPhotoItemHeight !== photoItemHeight) {
        setPhotoItemHeight(newPhotoItemHeight, () => {
          document.querySelector("#culture_photos_index").style.height = `${newPhotoItemHeight * 2 + 38}px`;
        });
      }
    }
  };

  return (
    <div id="culture">
      <br />
      <div className="title">
        <hr />
        <span>Культура</span>
      </div>
      <br />
      <br />
      <br />

      <div className="content" style={{ maxWidth: "1290px" }}>
        <div
          id="culture_photos_index"
          style={{
            position: "relative",
            textAlign: "center",
            letterSpacing: "16px",
            marginBottom: "20px",
            overflow: "hidden",
            height: "640px" // Add "px" to specify the height correctly
          }}
        >
          <div style={{ position: "absolute", left: "-20px", top: "0", right: "-20px" }}>
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

        <p style={{ textAlign: "center" }}>
                <RedirectButton></RedirectButton>
            </p>
      </div>
    </div>
  );
};

export default Culture;
