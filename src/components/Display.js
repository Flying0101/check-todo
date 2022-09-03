import react from 'react';

import '../css/Display.css';


import FR from '../img/forest.jpg'


function Display() {





    return (
        <div className="Display">
            <img src={FR} className="display-img" />
            <p className="display-header">Your <br /> Tasks</p>

            <div className="stat-div">
                <div className="stat-grid">
                    <div className="stats">
                        <p className="no">10 <br/> information</p>
                    </div>
                    <div className="stats">
                        <p className="no">10 <br/> information</p>

                    </div>

                </div>


                <div className="stat-margin">testing

                </div>
            </div>


            <div className="display-date">

                <p className="date">01 sep, 2022</p>

            </div>
        </div>
    );
}

export default Display;
