import React, { useState } from 'react';
import { NavBar } from './NavBar';
import { Aside } from './Aside';
import { Cards } from '../Cards/Cards';
import './desk.css';
import { cardsContext } from '../Desk/cardsContext';

export const Desk = () => {
  const [dragElement, setDraged] = useState('');
  const [board, setBoard] = useState('');

  const [arrayOfCards, setArrayofCards] = useState([
    {
      index: 0,
      name: 'В ПРОЦЕССЕ',
      tasks: [
        {
          name: '1',
          description: '',
        },
        {
          name: '2',
          description: '',
        },
        {
          name: '3',
          description: '',
        },
        {
          name: '4',
          description: '',
        },
        {
          name: '5',
          description: '',
        },
      ],
    },
    {
      index: 1,
      name: 'В моменте',
      tasks: [
        {
          name: 'ф',
          description: '',
        },
        {
          name: 'к',
          description: '',
        },
        {
          name: 'п',
          description: '',
        },
        {
          name: 'р',
          description: '',
        },
        {
          name: 'т',
          description: '',
        },
      ],
    },
  ]);
  const [isAdd, setIsAdd] = useState(false);
  const [isAddTask, setIsAddTask] = useState(false);

  return (
    <div>
      <cardsContext.Provider
        value={{
          arrayOfCards,
          setArrayofCards,
          isAdd,
          setIsAdd,
          isAddTask,
          setIsAddTask,
          dragElement,
          setDraged,
          board,
          setBoard,
        }}
      >
        <NavBar />
        <div className='container'>
          <Aside />
          <Cards />
        </div>
      </cardsContext.Provider>
    </div>
  );
};
