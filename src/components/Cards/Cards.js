import React, { useContext, useEffect, useState } from 'react';
import './cards.css';
import { Card } from './Card';
import { CardsAdd } from './CardsAdd';
import { cardsContext } from '../Desk/cardsContext';

export function Cards() {
  const { isAdd, setIsAdd, arrayOfCards } = useContext(cardsContext);
  const [arrayOfTasks, setArrayOfTasks] = useState([]);

  useEffect(() => {
    const arr = [];
    let curArr = [];
    arrayOfCards.forEach((element) => {
      element.tasks.forEach((ele) => {
        curArr.push(ele.name);
      });
      arr.push(curArr);
      curArr = [];
    });
    setArrayOfTasks([...arr]);
  }, [arrayOfCards]);

  return (
    <div className="cards">
      {arrayOfCards.map((element, index) => (
        <div key={element.name}>
          <Card
            cardIndex={index}
            cardTitle=<p>{element.name}</p>
            listOfTasks={arrayOfTasks[index]}
          />
        </div>
      ))}
      {!isAdd ? (
        <div className="cardsAdd" onClick={() => setIsAdd(true)}>
          Добавить еще одну колонку
        </div>
      ) : (
        <CardsAdd />
      )}
    </div>
  );
}