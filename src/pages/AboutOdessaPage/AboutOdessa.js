import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../translations.json";
import odessaFlag from "./odessaFlag.png";
import "./AboutOdessa.css";

const AboutOdessa = () => {
  const { currentLanguage } = useContext(LanguageContext);
  const aboutTranslations = translations.aboutOdessa[currentLanguage];

  return (
    <div>
      <div className="title" style={{ top: "90px" }}>
        <hr />
        <span>{aboutTranslations["informationAboutOdessa"]}</span>
      </div>
      <div
        className="content"
        style={{
          maxWidth: "1400px",
          fontSize: "20px",
          color: "#515151",
          marginBottom: "120px",
          marginTop: "50px",
        }}
      >
        <div className="about_odessa_block">
          <img className="odessa_flag" src={odessaFlag} alt="odessaFlag" />
          <br />
          <div className="text">
            <p>{aboutTranslations["welcomeToOdessa"]}</p>
            <br />
            <p>{aboutTranslations["odessaHistory"]}</p>
            <br />
            <p>{aboutTranslations["websiteDescription"]}</p>
            <br />
            <p>{aboutTranslations["artAndCulture"]}</p>
            <br />
            <p>{aboutTranslations["gastronomicDelights"]}</p>
            <p>{aboutTranslations["promenadeAlongTheSeaside"]}</p>
            <br />
            <p>{aboutTranslations["oddysseaGuide"]}</p>
            <br />
            <p>{aboutTranslations["welcomeToOdessaInspiration"]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOdessa;
