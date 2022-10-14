import React from 'react';

import './Card.css';

import image from './congrats-card-profile-img.png';

import { Menubar } from '../MENU/menu';

import image2 from './watch2.png';



export function Card(){
    return(
        <div>
          <Menubar/>
        <div className="main">
          <h1>Congratulations</h1>
          <div className="inner">
             <img src={image}/>
             <h3>Kiran V</h3>
             <p>Vishnu Institute of computer Education and Technology,Bhimavaram.</p>
             <img src={image2} className="img_watch"/>
          </div>
        </div>
      </div>
    );
}