import React from 'react';
import RedirectButton from "../RedirectButton/RedirectButton"


const PhotoGallery = () => { 
    return(
        <div style={{justifyContent: 'center'}} id="photoGallery">
        <div>
        <br />
        <div className="title">
          <hr />
          <span>Фотогалерея</span>
        </div>
        <br />
        <br />
        <br />
        <div className="photo-gallery">
          <div className="gallery-container w-3">
            <div className='gallery-item'>
              <a className="image">
                <img src={descentCoast} alt="descent coast"></img>
              </a>
              <div className="text">Одесса</div>
            </div>
          </div>
          <div className="gallery-container">
            <div className='gallery-item'>
              <a className="image">
                <img src={descentCoast} alt="descent coast"></img>
              </a>
              <div className="text">Одесса</div>
            </div>
          </div>
          <div className="gallery-container w-2">
            <div className='gallery-item'>
              <a className="image">
                <img src={descentCoast} alt="descent coast"></img>
              </a>
              <div className="text">Одесса</div>
            </div>
          </div>
          <div className="gallery-container">
            <div className='gallery-item'>
              <a className="image">
                <img src={descentCoast} alt="descent coast"></img>
              </a>
              <div className="text">Одесса</div>
            </div>
          </div>
          <div className="gallery-container">
            <div className='gallery-item'>
              <a className="image">
                <img src={descentCoast} alt="descent coast"></img>
              </a>
              <div className="text">Одесса</div>
            </div>
          </div>
          <div className="gallery-container">
            <div className='gallery-item'>
              <a className="image">
                <img src={descentCoast} alt="descent coast"></img>
              </a>
              <div className="text">Одесса</div>
            </div>
          </div>
          <div className="gallery-container w-3 h-2">
            <div className='gallery-item'>
              <a className="image">
                <img src={descentCoast} alt="descent coast"></img>
              </a>
              <div className="text">Одесса</div>
            </div>
          </div>
          <div className="gallery-container">
            <div className='gallery-item'>
              <a className="image">
                <img src={descentCoast} alt="descent coast"></img>
              </a>
              <div className="text">Одесса</div>
            </div>
          </div>
          <div className="gallery-container w-2">
            <div className='gallery-item'>
              <a className="image">
                <img src={descentCoast} alt="descent coast"></img>
              </a>
              <div className="text">Одесса</div>
            </div>
          </div>
        </div>
        <p style={{ textAlign: "center" }}>
          <a href='' className='photos_link'>Смотреть все фото (10)</a>
        </p>
        <RedirectButton to="">Смотреть все фото</RedirectButton>
      </div>
      </div>
    )
}

export default PhotoGallery;