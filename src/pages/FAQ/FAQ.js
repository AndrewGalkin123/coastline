import React, { useState } from "react";
import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer/Footer";
import "./FAQ.css";

const FAQ = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <Header />
      <div className="content" style={{ maxWidth: "1300px" }}>
        <div className="faq_wrapper">
          <h1>Самые часто задаваемые вопросы</h1>
          <div className="faq">
            <button
              className={`accordion ${activeAccordion === 0 ? "active" : ""}`}
              onClick={() => toggleAccordion(0)}
            >
              Что такое Oddyssea?
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div
              className={`pannel ${activeAccordion === 0 ? "active" : ""}`}
              style={{ display: activeAccordion === 0 ? "block" : "none" }}
            >
              <p>
                Oddyssea - это онлайн-платформа, посвященная городу Одессе. Мы
                предлагаем информацию о истории, культуре, достопримечательностях
                и атмосфере города.
              </p>
            </div>
          </div>
          <div className="faq">
            <button
              className={`accordion ${activeAccordion === 1 ? "active" : ""}`}
              onClick={() => toggleAccordion(1)}
            >
              Какая цель Oddyssea?
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div
              className={`pannel ${activeAccordion === 1 ? "active" : ""}`}
              style={{ display: activeAccordion === 1 ? "block" : "none" }}
            >
              <p>
                Наша цель - предоставить посетителям всю необходимую информацию
                об Одессе, чтобы помочь им планировать поездку, изучать историю
                и культуру города, а также наслаждаться уникальной атмосферой
                Одессы.
              </p>
            </div>
          </div>
          <div className="faq">
            <button
              className={`accordion ${activeAccordion === 2 ? "active" : ""}`}
              onClick={() => toggleAccordion(2)}
            >
              Как я могу использовать Oddyssea?
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div
              className={`pannel ${activeAccordion === 2 ? "active" : ""}`}
              style={{ display: activeAccordion === 2 ? "block" : "none" }}
            >
              <p>
                Вы можете использовать Oddyssea для получения информации о
                достопримечательностях Одессы, ознакомления с историческими
                фактами, изучения местной культуры, просмотра фотографий и
                других материалов, а также для планирования своей поездки в
                Одессу.
              </p>
            </div>
          </div>
          <div className="faq">
            <button
              className={`accordion ${activeAccordion === 3 ? "active" : ""}`}
              onClick={() => toggleAccordion(3)}
            >
              Я хочу узнать больше о конкретной достопримечательности. Где я могу найти подробную информацию?
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div
              className={`pannel ${activeAccordion === 3 ? "active" : ""}`}
              style={{ display: activeAccordion === 3 ? "block" : "none" }}
            >
              <p>
                На нашем сайте вы найдете отдельные страницы для каждой достопримечательности, где представлена
                подробная информация, фотографии, история и другие интересные факты.
                Выберите достопримечательность, которая вас интересует, и перейдите на соответствующую страницу.
              </p>
            </div>
          </div>
          <div className="faq">
            <button
              className={`accordion ${activeAccordion === 4 ? "active" : ""}`}
              onClick={() => toggleAccordion(4)}
            >
              У меня есть собственные фотографии Одессы. Могу ли я поделиться ими на Oddyssea?
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div
              className={`pannel ${activeAccordion === 4 ? "active" : ""}`}
              style={{ display: activeAccordion === 4 ? "block" : "none" }}
            >
              <p>
                Конечно! Мы будем рады увидеть ваш вклад. Вы можете отправить свои фотографии Одессы на нашу электронную почту
                oddyssea@gmail.com с указанием вашего имени и краткого описания фотографий. Мы рассмотрим возможность
                размещения их на сайте.
              </p>
            </div>
          </div>
          <div className="faq">
            <button
              className={`accordion ${activeAccordion === 5 ? "active" : ""}`}
              onClick={() => toggleAccordion(5)}
            >
              Как связаться с командой Oddyssea?
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div
              className={`pannel ${activeAccordion === 5 ? "active" : ""}`}
              style={{ display: activeAccordion === 5 ? "block" : "none" }}
            >
              <p>
                Если у вас есть вопросы, предложения или отзывы, вы можете связаться с нами,
                заполнив форму обратной связи на нашем сайте. Мы постараемся ответить вам в кратчайшие сроки.
              </p>
            </div>
          </div>
          <div className="faq">
            <button
              className={`accordion ${activeAccordion === 6 ? "active" : ""}`}
              onClick={() => toggleAccordion(6)}
            >
              Какая информация доступна на странице "История Одессы"?
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div
              className={`pannel ${activeAccordion === 6 ? "active" : ""}`}
              style={{ display: activeAccordion === 6 ? "block" : "none" }}
            >
              <p>
                На странице "История Одессы" вы найдете увлекательные рассказы о прошлом города, его основании, ключевых событиях,
                известных личностях и многое другое. Мы стараемся представить историю Одессы в интересной и доступной форме.
              </p>
            </div>
          </div>
          <div className="faq">
            <button
              className={`accordion ${activeAccordion === 7 ? "active" : ""}`}
              onClick={() => toggleAccordion(7)}
            >
              Я планирую поездку в Одессу. Какие места стоит посетить?
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div
              className={`pannel ${activeAccordion === 7 ? "active" : ""}`}
              style={{ display: activeAccordion === 7 ? "block" : "none" }}
            >
              <p>
                Мы составили список рекомендуемых мест для посещения в Одессе. На странице "Лучшие места" вы найдете информацию о самых популярных
                достопримечательностях, парках, пляжах, музеях и других интересных местах, которые стоит посетить во время вашей поездки.
              </p>
            </div>
          </div>
          <div className="faq">
            <button
              className={`accordion ${activeAccordion === 8 ? "active" : ""}`}
              onClick={() => toggleAccordion(8)}
            >
              Я хочу поделиться своим опытом о посещении Одессы. Как я могу сделать это?
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div
              className={`pannel ${activeAccordion === 8 ? "active" : ""}`}
              style={{ display: activeAccordion === 8 ? "block" : "none" }}
            >
              <p>
                Мы всегда рады услышать отзывы и рассказы о поездках в Одессу. Вы можете отправить свой отзыв на нашу электронную
                почту oddyssea@gmail.com или же на форме обратной связи с указанием вашего имени и вашего опыта. Мы можем опубликовать ваш отзыв на нашем сайте.
              </p>
            </div>
          </div>
          <div className="faq">
            <button
              className={`accordion ${activeAccordion === 9 ? "active" : ""}`}
              onClick={() => toggleAccordion(9)}
            >
              Какие языки доступны на Oddyssea?
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div
              className={`pannel ${activeAccordion === 9 ? "active" : ""}`}
              style={{ display: activeAccordion === 9 ? "block" : "none" }}
            >
              <p>
                Наши материалы доступны на нескольких языках, включая английский, украинский и русский.
                Вы можете выбрать предпочитаемый язык на сайте.
              </p>
            </div>
          </div>
          <div className="faq">
            <button
              className={`accordion ${activeAccordion === 10 ? "active" : ""}`}
              onClick={() => toggleAccordion(10)}
            >
             Какие музеи стоит посетить в Одессе?
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div
              className={`pannel ${activeAccordion === 10 ? "active" : ""}`}
              style={{ display: activeAccordion === 10 ? "block" : "none" }}
            >
              <p>
              В Одессе есть множество интересных музеев, включая Одесский литературный музей, Музей истории Одессы, 
              Художественный музей и другие. Мы предоставляем информацию о каждом музее, его экспозициях и рабочих часах.
              </p>
            </div>
          </div>
          <div className="faq">
            <button
              className={`accordion ${activeAccordion === 11 ? "active" : ""}`}
              onClick={() => toggleAccordion(11)}
            >
              Какие пляжи в Одессе я могу посетить?
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div
              className={`pannel ${activeAccordion === 11 ? "active" : ""}`}
              style={{ display: activeAccordion === 11 ? "block" : "none" }}
            >
              <p>
              В Одессе есть множество пляжей, включая Ланжерон, Аркадия, Дельфин, 
              Золотой берег и другие. На нашем сайте вы найдете подробную информацию о каждом пляже,
               его расположении, условиях и удобствах.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
