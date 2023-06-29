import React from 'react';
import './BurgerMenu.css'

const BurgerMenu = () => {
        return (
            <div className="burger-menu">
                <input id="menu-toggle" type="checkbox" />
                <label className="menu-btn" htmlFor="menu-toggle">
                    <span></span>
                </label>

                <ul className="menubox">
                    <li><a className="menu-item" href="/about">О нас</a></li>
                    <li><a className="menu-item" href="/about">История Проекта</a></li>
                    <li><a className="menu-item" href="#">Информация о городе</a></li>
                    <li><a className="menu-item" href="#">Наша Команда</a></li>
                    <li><a className="menu-item" href="#">Полезные ссылки</a></li>
                    <li><a className="menu-item" href="/contacts">Связаться с нами</a></li>
                    <li><a className="menu-item" href="/faq">Вопросы и ответы (FAQ)</a></li>
                    <li><a className="menu-item" href="/termsofuse">Условия Использования</a></li>
                    <li><a className="menu-item" href="/termsofuse">Авторские права</a></li>
                    
                </ul>
            </div>
        )
}

export default BurgerMenu;