import React from "react";
import './aside.css';
import desk from './desk.png'
import people from './people.png'
import settings from './settings.png'
import table from './table.png'
import calendr from './calendr.png'

export const Aside = () => {
    return (
        <div className="aside">
            <div className="asideTitleblock">
                <img src="" className="asideImage" />
                <h3 className="asideTitle"> Рабочее пространство Lists </h3>
                <button className="asideButton"> &#x2039;</button>
            </div>
          
            <div className="asideBlock">
                <div className="asideBlockElement">
                     <img className="asideIcon" src={desk}/>
                    <p>Доски</p>
                </div>
                <div className="asideBlockElement">
                <img className="asideIcon" src={people}/>
                    <p>Участники</p>
                </div>
                <div className="asideBlockElement">
                <img className="asideIcon" src={settings}/>
                    <p>Настройки</p>
                </div>
                <p className="asideSubtitle">Режимы просмотра рабочего пространства</p>
            </div>
            <div className="asideBlock">
                <div className="asideBlockElement">
                <img className="asideIcon" src={table}/>
                    <p>Таблица</p>
                </div>
                <div className="asideBlockElement">
                <img className="asideIcon" src={calendr}/>
                    <p>Кaлендарь</p>
                </div>
            </div>

        </div>
    )
}
