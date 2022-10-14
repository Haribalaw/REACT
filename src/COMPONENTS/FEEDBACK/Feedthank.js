import React from "react";

import 'bootstrap/dist/css/bootstrap.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeart } from "@fortawesome/free-solid-svg-icons";

import './Feedthank.css';
import { Menubar } from "../MENU/menu";

export function Feedthank(){
    return(
        <>
        <Menubar/>
        <div className="thank col-lg-6 ml-auto mr-auto mt-5">
            <div className="bg-white text-center col-lg-6 ml-auto mr-auto p-5 heardiv">
                <FontAwesomeIcon icon={faHeart} className='heartsmile'/>
                <h1 className="font-weight-bold">Thank You!</h1>
                <p>we will use your feebback to improve our customer support performance.</p>
            </div>
        </div>
        </>
    );
} 