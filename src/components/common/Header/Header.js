import React from "react";
import BurgerMenu from "../../BurgerMenu/BurgerMenu"
import './Header.css'

const Header = () => { 
    return(
        <header>
        <nav>
          <ul>
            <li>
              <a className="navigation-link" href="#history">
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

        <BurgerMenu />
      </header>
    )
}

export default Header;