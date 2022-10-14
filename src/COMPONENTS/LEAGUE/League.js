import React from 'react';

import './League.css';

import cimage from './csk.jpg';

import rimage from './rcb.jpg';

import { Menubar } from '../MENU/menu';


export function League(){
    return(
        <div>
            <Menubar/>
            <div className="mainbg">
                <div>
                    <h1>Super Over League</h1>
                    <img src={rimage}/>
                    <img src={cimage}/>
                </div>
            </div>
        </div>
    );
}