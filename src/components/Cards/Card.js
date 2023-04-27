import React, { useContext, useState } from 'react';
import './card.css';
import { cardsContext } from '../Desk/cardsContext';
import { AddTask } from './AddTask';
import { changeArray, changeCards } from '../functions/functions';

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
    dragClass,
    setDragClass,
  } = useContext(cardsContext);

  const dragStart = (e, i, iboard) => {
    setDragClass(e.classList[0]);
    setDraged(i);
    setIsDrag(true);
    setBoard(iboard);
  };
  const dragOver = (e, i) => {
    e.preventDefault();
    setCoverd(i);
    const curObj = arrayOfCards[cardIndex];

    if (dragElement !== i && dragClass == 'task') {
      if (isDrag) {
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
        setIsDrag(false);
      }
    }
  };
  const dragLeave = () => {
    setDraged(coverdElement);
    setIsDrag(true);
  };
  const dragCard = (e, i) => {
    setDragClass(e.classList[0]);
    setBoard(i);
  };
  const addCard = (e, i) => {
    e.preventDefault();
    setBoard(i);
    if (dragClass == 'card' && board !== i) {
      setArrayofCards(changeArray(arrayOfCards, 0, 0, i, board));
    } else if (board !== i && Number.isInteger(board) && dragClass == 'task') {
      setIsDrag(true);
      const curObj = arrayOfCards[i];
      let prevObj = board < i ? arrayOfCards[i - 1] : arrayOfCards[i + 1];
      let newtask = [...curObj.tasks, prevObj.tasks[dragElement]];
      let prevtask = dragElement
        ? [
            ...prevObj.tasks.slice(0, dragElement),
            ...prevObj.tasks.slice(dragElement + 1),
          ]
        : [...prevObj.tasks.slice(dragElement + 1)];
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
      setArrayofCards(changeArray(arrayOfCards, preNewObj, newObj, i, board));
    }
  };

  const dragEnd = () => {
    setIsDrag(false);
    setBoard('');
    setDraged('');
  };
  return (
    <div
      className="card"
      onDragEnter={(e) => addCard(e, cardIndex)}
      onDragStart={(e) => dragCard(e.target, cardIndex)}
      onDragOver={(e) => e.preventDefault()}
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
          onDragStart={(e) => dragStart(e.target, index, cardIndex)}
          onDragOver={(e) => dragOver(e, index)}
          onDragLeave={dragLeave}
          onDrop={dragEnd}
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
