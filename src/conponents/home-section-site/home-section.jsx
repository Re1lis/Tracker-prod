import React from "react";
import './home-section.css'
import DateDisplay from "../time-date/date";
import Clock from "../time-date/clock"; 

export default function HomeSection () {
    return (
        <>
            <div id="home-section-href"></div>
            <h2 className="title-section" >Главная</h2>

            
            <div className="home-container">
                <div className="time-date">
                    Сегодня: <br /> <br />
                        <DateDisplay/>
                    Сейчас: <br /> <br />
                        <Clock/>
                </div>
                <div className="image-text-container">
                <img src="public\persong-image-second.png" alt="" />
                <div className="text-container">
                    <h3 className="text-about-person">Привет, меня зовут Боб. Давай я тебе немного расскажу о чем весь этот сайт, а также, что тут можно делать.</h3>
                    <p className="text-about-site">
                    Добро пожаловать на наш трекер привычек - ваш персональный помощник в достижении целей и улучшении жизни! Наши разделы предоставляют вам все необходимое для организации и мотивации: <br />
                        1. Главная: здесь вы находитесь сейчас, здесь можно узнать о всех возможностях сайта. <br />
                        2. Цели и задачи: задумайте и отслеживайте свои цели на день, неделю, месяц или год, а также добавляйте новые, чтобы двигаться вперед. <br />
                        3. Магазин аватарок: за каждую достигнутую цель вы получаете игровую валюту - пряниксы, которые можно обменять на аватарку. <br /> 
                        4. Профиль пользователя: здесь хранятся ваши персональные данные, а также статистика выполненных задач, чтобы вы могли следить за своим прогрессом. В профиле вы можете добавить новых друзей, достаточно только ввести ник вашего друга (его статистика также будет видна вам, а также она будет сравнивать с вашей). <br />
                        Каждая выполненная задача приносит вам 5 пряниксов, а также повышает ваш уровень, открывая новые возможности и приятные сюрпризы. Если же вы не выполните задание, то с вашего баланса спишется некое количество валюты, однако уйти в минус вы не сможете.<br />
                        <br />Спасибо за внимание и удачи на пути к лучшей версии себя!
                        <br />
                        <span>
                            С уважением,
                            Ваш БОБ
                        </span>
                    </p>
                </div>
                </div>
            </div>
        </>
    )
}