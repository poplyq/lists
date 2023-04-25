import React, { useContext, useState } from 'react';
import './card.css';
import { cardsContext } from '../Desk/cardsContext';
import { AddTask } from './AddTask';
import PropTypes from 'prop-types';
import { changeCards } from '../functions/functions';

export function Card(props) {
  const { listOfTasks, cardIndex, cardTitle } = props;
  const [isDrag, setIsDrag] = useState(false);
  const [coverdElement, setCoverd] = useState('');
  const {
    isAddTask,
    setIsAddTask,
    arrayOfCards,
    setArrayofCards,
    dragElement,
    setDraged,
    board,
    setBoard,
  } = useContext(cardsContext);
  const dragStart = (e, i, iboard) => {
    setDraged(i);
    setIsDrag(true);
    setBoard(iboard);
  };
  const dragEnd = () => {};

  const dragOver = (e, i) => {
    e.preventDefault();
    setCoverd(i);
    const curObj = arrayOfCards[cardIndex];
    if (dragElement !== i) {
      if (isDrag) {
        if (dragElement > i) {

          const newObj = {
            index: cardIndex,
            name: curObj.name,
            tasks: changeCards(dragElement, i, curObj.tasks),
          };
          setArrayofCards((prev) => [
            ...prev.slice(0, cardIndex),
            newObj,
            ...prev.slice(cardIndex + 1),
          ]);
        } else if (dragElement < i) {
          const newObj = {
            index: cardIndex,
            name: curObj.name,
            tasks: changeCards(dragElement, i, curObj.tasks),
          };
          setArrayofCards((prev) => [
            ...prev.slice(0, cardIndex),
            newObj,
            ...prev.slice(cardIndex + 1),
          ]);
        }
        setIsDrag(false);
      }
    }
  };
  const dragStop = (e) => {
    e.preventDefault();
  };
  const dragLeave = () => {
    setDraged(coverdElement);
    setIsDrag(true);
  };
  const LeaveCard = () => {};

  const addCard = (i) => {
    setBoard(i);
    const curObj = arrayOfCards[i];
    const newtask = [...curObj.tasks, prevObj.tasks[dragElement]];
    let prevtask = [];
    if (board < i) {
      setIsDrag(true);
      const prevObj = arrayOfCards[i - 1];
      if (dragElement) {
        prevtask = [
          ...prevObj.tasks.slice(0, dragElement - 1),
          ...prevObj.tasks.slice(dragElement),
        ];
      } else {
        prevtask = [...prevObj.tasks.slice(dragElement + 1)];
      }
      const newObj = {
        index: i,
        name: curObj.name,
        tasks: newtask,
      };
      const preNewObj = {
        index: i - 1,
        name: prevObj.name,
        tasks: prevtask,
      };
      setDraged(newtask.length - 1);
      setArrayofCards((prev) => [
        ...prev.slice(0, i - 1),
        preNewObj,
        newObj,
        ...prev.slice(i + 1),
      ]);
    } else if (board > i) {
      setIsDrag(true);
      const prevObj = arrayOfCards[i + 1];
      if (dragElement) {
        prevtask = [
          ...prevObj.tasks.slice(0, dragElement),
          ...prevObj.tasks.slice(dragElement + 1),
        ];
      } else {
        prevtask = [...prevObj.tasks.slice(dragElement + 1)];
      }

      const newObj = {
        index: i,
        name: curObj.name,
        tasks: newtask,
      };
      const preNewObj = {
        index: i - 1,
        name: prevObj.name,
        tasks: prevtask,
      };
      setDraged(newtask.length - 1);
      setArrayofCards((prev) => [
        ...prev.slice(0, i),
        newObj,
        preNewObj,
        ...prev.slice(i + 2),
      ]);
    }
  };
  return (
    <div
      className="card"
      onDragLeave={LeaveCard}
      onDragEnter={() => addCard(cardIndex)}
      draggable="true"
    >
      <div className="cardTitle">
        {cardTitle}
        <button type="button" className="cardTitleButton">
          ...
        </button>
      </div>
      {listOfTasks?.map((element, index) => (
        <div
          key={element}
          className="task"
          draggable="true"
          onDragStart={(e) => dragStart(e, index, cardIndex)}
          onDragEnd={dragEnd}
          onDragOver={(e) => dragOver(e, index)}
          onDrop={(e) => dragStop(e, index)}
          onDragLeave={dragLeave}
        >
          {element}
        </div>
      ))}
      {isAddTask ? (
        <AddTask index={cardIndex} />
      ) : (
        <div>
          <div
            type="button"
            className="cardAdd"
            onClick={() => setIsAddTask(true)}
          >
            Добавить карточку
          </div>
        </div>
      )}
    </div>
  );
}
