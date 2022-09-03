import react from 'react';
import { useState } from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil';

import { allTasks } from '../stores/AllTasks.js';
import { FaArrowDown } from 'react-icons/fa';


import '../css/AddFunc.css';



function AddFunc() {


    const [showModal, setShowModal] = useState(false);


    const [taskData, setTaskData] = useRecoilState(allTasks)

    const [place, setPlace] = useState('');
    const [task, setTask] = useState('');
    const [type, setType] = useState('');



    function openModal() {
        setShowModal(!showModal);
    }



    function addTask() {


        const taskList = {

            type: type,
            location: place,
            Todo: task,
            done: false,
            time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes(),

        };

        console.log(taskList);

        setTaskData([...taskData, taskList]);

        setShowModal(false);

    } 

    function closeModal() { 

        setShowModal(false);
    }



    return (
        <div className="AddFunc">
            <button onClick={openModal} className="add-btn">+</button>

            <div className={!showModal ? 'dis' : 'add-modal'}>
                <div className="arrow-container"  >
                    <FaArrowDown className="modal-arrow" onClick={(closeModal)} />
                </div>

                <p className="modal-header">Add new task!</p>
                <form className="task-form" onSubmit={(e) => { e.preventDefault() }}>
                    <select className="modal-input" onChange={(event) => { setType(event.target.value) }} >
                        <option className="task-categorie" >Type of task...</option>
                        <option className="task-categorie" value="Business">Business</option>
                        <option className="task-categorie" value="Training">Training</option>
                        <option className="task-categorie" value="School">School</option>
                        <option className="task-categorie" value="Party">Party</option>
                    </select>
                    <br />
                    <input className="modal-input" type="text" placeholder="Place" onChange={(event) => { setPlace(event.target.value) }}></input>
                    <br />
                    <input className="modal-input" type="text" placeholder="Task" onChange={(event) => { setTask(event.target.value) }}></input>
                    <br />
                    <button className="form-btn" type="submit" onClick={(addTask)}>ADD YOUR TASK</button>
                </form>

            </div>

        </div>
    );
}

export default AddFunc;


// <input className="modal-input" type="text" placeholder="Categori">
// </input>
