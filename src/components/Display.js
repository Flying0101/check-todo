import react from 'react';
import { useState, useEffect, useMemo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';


import { allTasks } from '../stores/AllTasks.js';


import '../css/Display.css';
import FR from '../img/forest.jpg'


function Display() {
    // time func


    let today = new Date();

    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();





    // taking all tasks to make task stats!
    const [wholeList, setWholeList] = useRecoilState(allTasks);
    const [doneTask, setDoneTask] = useState();
    const [activeTask, setActiveTask] = useState();


    const doneTasks = useMemo(() => {
        return wholeList.filter((task) => task.done);
    }, [wholeList]);


    const falseTasks = useMemo(() => {
        return wholeList.filter((task) => !task.done);
    }, [wholeList]);





    return (
        <div className="Display">
            <img src={FR} className="display-img" />
            <p className="display-header">Your <br /> Tasks</p>

            <div className="stat-div">
                <div className="stat-grid">
                    <div className="stats">
                        <p className="no">{falseTasks.length} <br /> <span className="no2">active</span></p>
                    </div>
                    <div className="stats">
                        <p className="no">{doneTasks.length}<br /> <span className="no2">done</span></p>

                    </div>

                </div>


                <div className="stat-margin">
                    <p>total tasks: {wholeList.length}</p>
                </div>
            </div>


            <div className="display-date">

                <p className="date">{ day + '/' + month + '/' + year}</p>

            </div>
        </div>
    );
}

export default Display;
