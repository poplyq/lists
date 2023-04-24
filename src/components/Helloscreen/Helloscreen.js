import React from "react";
import './helloscreen.css'

export const Helloscreen =()=>{

    return(
        <div className="hello">
            <div className="helloAbout">
            <h2 className="helloTitle">Lists помогает собрать всех сотрудников, задачи и инструменты в одном месте</h2>
            <p className="helloSubtitle">Объедините все в одном месте, даже если участники вашей команды рассеяны по миру.</p>
  

            </div>
                      <img className="helloImg" src="https://images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png?w=2280&fm=webp" alt=""/>
        </div>
    )
}