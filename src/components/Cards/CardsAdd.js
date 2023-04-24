import React, { useContext, useState } from "react";
import './cardsAdd.css'
import { cardsContext } from "../Desk/cardsContext";

export const CardsAdd = () => {
    const { setIsAdd , arrayOfCards, setArrayofCards} = useContext(cardsContext)
    const [value, setValue] = useState('')


    const addCard = ()=>{
        if(value){
            let newObj = 
            {
                index: arrayOfCards.length ,
                name: value,
                tasks:[],
            }
            setArrayofCards(prev=>[...prev, newObj])
        setIsAdd(false)
    } 
    }

    return (
        <div
            className="addCards"
        >
            <input
                className="addCardsInput"
                type="text"
                placeholder="Введите заголовок списка"
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
                    onClick={e => setIsAdd(false)}
                >
                    &#xd7;
                </button>
            </div>
        </div>
    )
}