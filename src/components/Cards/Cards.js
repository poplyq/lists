import React, { useContext, useEffect, useState } from "react";
import './cards.css'
import { Card } from "./Card";
import { CardsAdd } from "./CardsAdd";
import { cardsContext } from "../Desk/cardsContext";

export const Cards = () => {
  
    const { isAdd, setIsAdd, arrayOfCards, } = useContext(cardsContext)
    const [arrayOfTasks, setArrayOfTasks] = useState([])

    useEffect(() => {
        let arr = []
        let curArr = []
        arrayOfCards.forEach((element) => {
      
            element.tasks.forEach((ele) => {
                curArr.push(ele.name)
            })
            arr.push(curArr)
            curArr = []
        })
        setArrayOfTasks([...arr])
    }, [arrayOfCards])

    return (
        <div className="cards">

            {
                arrayOfCards.map((element, index) => (

                    <div
                        key={index}
                        >
                        <Card
                            index={index}
                            nameCard=
                            <p>
                                {element.name}
                            </p>
                            listTasks={arrayOfTasks[index]}
                        >
                        </Card>
                    </div>
                )
                )
            }
            {
                !isAdd
                    ?
                    <div
                        className="cardsAdd"
                        onClick={e => setIsAdd(true)}
                    >
                        Добавить еще одну колонку
                    </div>
                    :
                    <CardsAdd />
            }


        </div>
    )
}