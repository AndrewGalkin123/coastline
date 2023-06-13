import React from "react";

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