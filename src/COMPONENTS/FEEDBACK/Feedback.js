import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faFaceMeh, faFaceSadCry } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmileBeam } from '@fortawesome/free-solid-svg-icons';
import './Feedback.css';
import { Menubar } from '../MENU/menu';

export function Feed(){
    return(
        <>
        <Menubar/>
        <div className='feedmain col-lg-8 ml-auto mr-auto mt-5'>
            <div className='bg-white text-center smil p-5 col-lg-12'>
                <h1>How statisfied are you with our customer support performance?</h1>
                <div className='row p-5 col-1g-12 text-center'>
                    <div className='col-lg-4 p-2'>
                    <Link to="/feedthank"><FontAwesomeIcon icon={faFaceSadCry} className="smile"/></Link>
                    </div>
                    <div className='col-lg-4 p-2'>
                    <Link to="/feedthank"><FontAwesomeIcon icon={faFaceMeh} className="smile"/></Link>
                    </div>
                    <div className='col-lg-4 p-2'>
                    <Link to="/feedthank"><FontAwesomeIcon icon={faFaceSmileBeam} className="smile"/></Link>
                    </div>
                </div>
            </div>

        </div>
        </>
    );
}