import React from "react";
import "./AboutBlock.css";
import avatar from "./панда.jpg";

const AboutBlock = () => {
    return (
        <div>
            <div className="title" style={{ top: "80px" }}>
                <hr />
                <span>Проект Oddyssea</span>
            </div>
            <div style={{
                maxWidth: "1290px",
                position: "relative",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                width: "94%",
                margin: "0 auto",
                top: "140px",
                height: "900px",
                marginBottom: "30px"
            }}>

                <img src={avatar} className="avatar" alt="Avatar" />

                <div className="text">
                    Добро пожаловать в мир Oddyssea - вашего виртуального проводника по
                    удивительному городу Одесса! Мы создали этот сайт, чтобы поделиться с
                    вами богатой историей, уникальной культурой и неповторимым очарованием
                    этого города.
                    <br />
                    <br />
                    ● Почему стоит выбрать Oddyssea?
                    <br />
                    <p style={{ marginLeft: "18px" }}>
                        У нас вы найдете все необходимое для захватывающего путешествия по
                        Одессе, не выходя из дома. Мы предлагаем вам уникальный опыт
                        виртуального путешествия, который сэкономит ваше время и деньги. Вы
                        сможете изучить историю и культуру Одессы, осмотреть достопримечательности и почувствовать атмосферу города,
                        не выходя из своего кресла. Благодаря удобному интерфейсу и подробным материалам, вы получите максимум информации о каждом уголке Одессы,
                        а также рекомендации и советы, которые помогут сделать ваше физическое путешествие по городу еще более интересным и насыщенным.
                    </p>
                    <br />
                    <br />
                    ● Мы понимаем ваши потребности:
                    <br />
                    <p style={{ marginLeft: "18px" }}>
                        Мы осознаем, что каждый человек имеет свои интересы и проблемы при
                        планировании путешествий. Может быть, у вас ограниченное время, и вы
                        хотите наиболее эффективно использовать его во время поездки.
                        Может быть, вам сложно выбрать из богатого культурного наследия
                        Одессы именно то, что подходит вам лично. Мы готовы помочь вам в таких
                        ситуациях. Oddyssea предлагает уникальные кураторские маршруты и
                        путеводители, разработанные с учетом различных интересов и
                        предпочтений. Мы предоставляем информацию о музеях, исторических
                        местах, памятниках архитектуры, ресторанах и развлечениях, чтобы вы
                        могли выбрать именно то, что отвечает вашим ожиданиям и
                        предпочтениям.
                    </p>
                    <br />
                    <br />
                    <p style={{ marginLeft: "-520px" }}>
                        ● Вы уже готовы начать свое виртуальное путешествие по Одессе?
                    </p>
                    <p style={{ marginLeft: "-504px" }}>
                        Пишите нам, чтобы получить дополнительную информацию или консультацию от нашей команды.
                        Вы также можете оставить свой номер телефона или задать любые вопросы, используя форму обратной связи на нашем сайте.
                        Мы всегда готовы помочь вам с выбором маршрутов, дать рекомендации о лучших местах для посещения и поделиться нашими знаниями о Одессе.
                        Не упустите возможность совершить увлекательное виртуальное путешествие и ощутить атмосферу Одессы прямо сейчас!
                    </p>
                    <br />
                </div>
            </div>
            <div className="title" style={{ marginBottom: "40px" }}>
                <hr />
                <span>История проекта</span>
            </div>
            <div className="content" style={{ maxWidth: "1290px" }}>
                <div className="text">
                    Вдохновленные уникальной атмосферой Одессы, историей этого города и его культурным наследием,
                    мы решили сделать этот опыт доступным для всех. Мы хотели создать виртуальную платформу,
                    которая позволит людям из любой точки мира погрузиться в мир Одессы, узнать ее историю, обогатиться знаниями и
                    ощутить ее уникальную атмосферу, не выходя из дома.
                </div>
            </div>
        </div>
    );
};

export default AboutBlock;