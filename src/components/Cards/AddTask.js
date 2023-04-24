import React, { useContext, useState } from "react";
import './cardsAdd.css'
import { cardsContext } from "../Desk/cardsContext";

export const AddTask = (props) => {

    const { setIsAddTask, arrayOfCards, setArrayofCards,  } = useContext(cardsContext)
    const [value, setValue] = useState('')


    const addCard = () => {
        if (value) {
            let curObj = arrayOfCards[props.index]
            let newtasks = [...curObj.tasks, { name: value, description: '' }]
            let newObj =
            {
                index: props.index,
                name: curObj.name,
                tasks: newtasks
            }

            setArrayofCards(prev => [...prev.slice(0, props.index), newObj, ...prev.slice(props.index + 1)])

            setIsAddTask(false)
    
        }
    }

    return (
        <div
            className="addCards"
        >
            <textarea
                rows={3}
                className="addCardsInput"
                type="textarea"
                placeholder="Введите заголовок для этой карточки"
                autoFocus={true}
                onChange={e => setValue(e.target.value)}
            />
            <div
                className="addCardsBlock"
            >
                <button
                    className="addCardsButton"
                    onClick={addCard}
                >
                    Добавить список
                </button>
                <button
                    className="addCardsClose"
                    onClick={e => setIsAddTask(false)}
                >
                    &#xd7;
                </button>
            </div>
        </div>
    )
}