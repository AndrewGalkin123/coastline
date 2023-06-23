import React from "react";
import BurgerMenu from "../../BurgerMenu/BurgerMenu"
import './Header.css'
import logo from "./anchor.png"
import phoneIcon from "../../../assets/icons/icon-phone-call-5585856.png"

const Header = () => { 
    return(
        <header>
          <a href="/"><img id="main-logo" src={logo}></img></a>
        <nav>
          <ul>
            <li>
              <a className="navigation-link" href="/history">
                История
              </a>
            </li>
            <li>
              <a className="navigation-link" href="#culture">
                Культура
              </a>
            </li>
            <li>
              <a className="navigation-link" href="#photoGallery">
                Фотогалерея
              </a>
            </li>
          </ul>
        </nav>
        <a className="contacts-info" href="/contacts"><img src={phoneIcon}></img></a>
        <BurgerMenu />
      </header>
    )
}

export default Header;