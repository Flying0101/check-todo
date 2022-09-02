import react from 'react';

import '../css/List.css';



function List() {





    return (
        <div className="ListContainer">
            <div className="todo-div">
                <p className="inbox-header">INBOX</p>
                <div className="list-box">1

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
