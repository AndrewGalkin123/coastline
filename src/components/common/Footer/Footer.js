import React from "react";
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>История компании<p>Контактная информация</p></h4>
                        
                        <ul>
                            <li><a href="/about">О нас</a></li>
                            <li><a href="#">Наша команда</a></li>
                            <li><a href="/about">История проекта</a></li>
                            <li><a href="/contacts">Контакты</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Информация о городе и достопримечательности</h4>
                        <ul>
                            <li><a href="#">Информация о городе</a></li>
                            <li><a href="#">Городские достопримечательности</a></li>
                            <li><a href="#">Места для посещения</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Ссылки и дополнительная информация</h4>
                        <ul>
                            <li><a href="#">Полезные ссылки</a></li>
                            <li><a href="#">Условия использования</a></li>
                            <li><a href="#">Политика конфиденциальности</a></li>
                            <li><a href="#">Авторские права</a></li>
                            <li><a href="#">Вопросы и ответы (FAQ)</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Наши соцсеты</h4>
                        <div className="social-links">
                            <a href="#"><i className="fab fa-telegram"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
