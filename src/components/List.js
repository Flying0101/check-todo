import react from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { allTasks } from '../stores/AllTasks.js';
import '../css/List.css';

import { FaPenAlt, FaRunning, FaCocktail, FaTrashAlt } from 'react-icons/fa';

import ScrollToBottom from 'react-scroll-to-bottom';


// FaPenAlt
// FaRunning
// FaCocktail

function List() {


    const [wholeList, setWholeList] = useRecoilState(allTasks);

    console.log(wholeList);

    const bisIcon = <FaPenAlt />;
    const partyIcon = <FaCocktail />;
    const trainIcon = <FaRunning />;



    function delTask(data) {
        console.log(data.id);
        setWholeList(prev => prev.filter(tasks => tasks.id !== data.id));
    }

    function completeTask(data) {

        console.log(data.id);

        let newLista = wholeList.map((tass) => {
            return data.id === tass.id ? { ...tass, done: !tass.done } : tass
        })

        setWholeList(newLista);
        console.log(newLista);


    }



    return (
        <div className="ListContainer">
            <div className="todo-div">
                <p className="inbox-header">INBOX</p>
                <div className="list-box">
                    <ScrollToBottom className="scroll-function">

                        <ul className="task-container">
                            {wholeList.map((data, index) => (
                                <li className={!data.done ? 'list-task' : 'complete-false'}>
                                    <div>
                                        <p className="task-info">{data.Todo}</p>
                                        <p className="task-location">{data.location}</p>
                                        <div className="taskBtn-container">
                                            <button className="taskBtn" id="clear" onClick={() => completeTask(data)}>✔</button>
                                            <button className="taskBtn" id="delete" onClick={() => delTask(data)}>X</button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </ScrollToBottom>

                </div>

            </div>
            <div className="completed-div">

                <p className="inbox-header">COMPLETED</p>
                <div className="list-box">
                    <ScrollToBottom className="scroll-function">
                        <ul className="task-container">
                            {wholeList.map((data, index) => (
                                <li className={!data.done ? 'complete-false' : 'list-task-true'}>
                                    <div>
                                        <p className="task-info">{data.Todo}</p>
                                        <p className="task-location">{data.location}</p>
                                        <div className="taskBtn-container">
                                            <button className="taskBtn" id="clear" onClick={() => completeTask(data)}>✔</button>
                                            <button className="taskBtn" id="delete" onClick={() => delTask(data)}>X</button>
                                        </div>
                                    </div>
                                </li>
                            ))}

                        </ul>

                    </ScrollToBottom>
                    
                </div>

            </div>

        </div >
    );
}

export default List;
