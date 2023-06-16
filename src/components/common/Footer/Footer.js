import React from "react";
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Компания</h4>
                        <ul>
                            <li><a href="/about">О нас</a></li>
                            <li><a href="#">Наша команда</a></li>
                            <li><a href="/about">История проекта</a></li>
                            <li><a href="#">Контакты</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Текст</h4>
                        <ul>
                            <li><a href="#">Текст</a></li>
                            <li><a href="#">Текст</a></li>
                            <li><a href="#">Текст</a></li>
                            <li><a href="#">Текст</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Текст</h4>
                        <ul>
                            <li><a href="#">Текст</a></li>
                            <li><a href="#">Текст</a></li>
                            <li><a href="#">Текст</a></li>
                            <li><a href="#">Текст</a></li>
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
