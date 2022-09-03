import react from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { allTasks } from '../stores/AllTasks.js'; 
import '../css/List.css';

// FaPenAlt
// FaRunning
// FaCocktail

function List() {


const [wholeList, setWholeList] = useRecoilState(allTasks);

console.log(wholeList);

    return (
        <div className="ListContainer">
            <div className="todo-div">
                <p className="inbox-header">INBOX</p>
                <div className="list-box">
                    <ul className="task-container">
                        {wholeList.map((data, index) => (
                            <li className="list-task">
                                <p className="task-info">{data.Todo}</p>
                                <p className="task-location">{data.location}</p>
                            </li>
                        ))}

                    </ul>

                </div>

            </div>
            <div className="completed-div">

                <p className="inbox-header">COMPLETED</p>
                <div className="list-box">2

                </div>

            </div>

        </div>
    );
}

export default List;
