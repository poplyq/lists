import React, { useContext, useState, } from "react";
import './card.css'
import { cardsContext } from "../Desk/cardsContext";
import { AddTask } from "./AddTask";

export const Card = (props) => {
    const [board, setBoard]= useState('')
    let a = props.listTasks
    const [isDrag, setIsDrag] = useState(false)
    const [coverdElement, setCoverd] = useState('')
    const [dragElement, setDraged] = useState('')


    const { isAddTask, setIsAddTask, arrayOfCards, setArrayofCards } = useContext(cardsContext)

    const dragStart = (e, i, iboard) => {
        setDraged(i)
        setIsDrag(true)
        setBoard(iboard)
    }
    const dragEnd = () => {
    }

    const dragOver = (e, i) => {
        e.preventDefault()
        setCoverd(i)
        let curObj = arrayOfCards[props.index]
        let newtask = [];

        if (dragElement != i) {
            if (isDrag) {
                if (dragElement > i) {
                    newtask =
                        [...curObj.tasks.slice(0, i),
                        curObj.tasks[i],
                        ...curObj.tasks.slice(i, dragElement),
                        ...curObj.tasks.slice(dragElement + 1, curObj.tasks.length)]

                } else if (dragElement < i) {
                    console.log();
                    newtask =
                        [...curObj.tasks.slice(0, dragElement),
                             curObj.tasks[i],
                        curObj.tasks[dragElement],
                        ...curObj.tasks.slice(i + 1, curObj.tasks.length)]

                    let newObj = {
                        index: props.index,
                        name: curObj.name,
                        tasks: newtask,
                    }
                    setArrayofCards(prev => [...prev.slice(0, props.index), newObj, ...prev.slice(props.index + 1)])

                }
                setIsDrag(false)
            }
        }

    }
    const dragStop = (e, index) => {
        e.preventDefault()
    }
    const dragLeave = ()=>{
        // setDraged(coverdElement)
        setIsDrag(true)
    }
    const LeaveCard = ()=>{
        // let curObj = arrayOfCards[props.index]
        // let newtask = [...curObj.tasks.slice(0, dragElement),

        // ...curObj.tasks.slice(dragElement+1, curObj.tasks.length)];
        // let newObj = {
        //     index: props.index,
        //     name: curObj.name,
        //     tasks: newtask,
        // }
        // setArrayofCards(prev => [...prev.slice(0, props.index), newObj, ...prev.slice(props.index + 1)])
    }
const addCard = (i)=>{
    if(board !=i){
        // debugger
    let prevObj = arrayOfCards[i-1]
    let curObj = arrayOfCards[i]
    let newtask = [...curObj.tasks, prevObj.tasks[1]]
    console.log();
    let prevtask = [...prevObj.tasks.slice(0,1), ...prevObj.tasks.slice(2)]
    let newObj = {
        index: i,
        name: curObj.name,
        tasks: newtask,
    }
    let preNewObj = {
        index: i-1,
        name: prevObj.name,
        tasks: prevtask,
    }
    setArrayofCards(prev => [...prev.slice(0, i-1),preNewObj, newObj, ...prev.slice(i + 1)])
}

}
    return (
        <div className="card" onDragLeave={LeaveCard} onDragEnter={e=>addCard(props.index)}>
            <div className="cardTitle">
                {props.nameCard}
                <button className="cardTitleButton">...</button>
            </div>
            {a?.map((element, index) => (
                <div
                    className="task"
                    key={index}
                    draggable={true}
                    onDragStart={e => dragStart(e, index, props.index)}
                    onDragEnd={dragEnd}
                    onDragOver={e => dragOver(e, index)}
                    onDrop={e => dragStop(e, index)}
                    onDragLeave={dragLeave}
                >
                    {element}
                </div>
            ))}
            {
                isAddTask ?
                    <AddTask index={props.index} /> :
                    <div className="cardAdd" onClick={e => setIsAddTask(true)}>Добавить карточку</div>
            }
        </div>
    )
}