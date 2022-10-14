import React from 'react';

import { Link } from 'react-router-dom';

import './menu.css';

import 'bootstrap/dist/css/bootstrap.css';

export function Menubar(){
    return(
        <div>
            <ul className='menu col-lg-12'>
                <Link to="/home"><li>HOME</li></Link>
                <Link to="/card"> <li>CARD</li></Link>
                <Link to="/league"><li>LEAGUE</li></Link>
                <Link to="/technologies"><li>TECHNOLOGIES</li></Link>
                <Link to="/counter"><li>COUNTER</li></Link>
                <Link to="/fruitcounter"><li>FRUITCOUNTER</li></Link>
                <Link to="/feedback"><li>FEEDBACK</li></Link>
                <Link to="/cards"><li>CARDS</li></Link>
            </ul>
        </div>
    );
}