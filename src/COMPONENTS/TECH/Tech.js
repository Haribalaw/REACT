import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import './Tech.css';

import { Menubar } from '../MENU/menu';

import datasci from './datasci.png';

import iotengin from './iotengin.jpeg';

import vrengin from './vrengin.jpeg';

import mlengin from './mlengin.png';

export function Tech(){

    return(
     <div className='text-center'>
        
        <Menubar/>
        <h1>Learn 4.0 Technologies</h1>
        <p>Industry 4.0, which encompasses IIoT and smart manufacturing, marries physical production and operations with smart digital technology, machine learning, and big data to create a more holistic and better connected ecosystem for companies that focus on manufacturing and supply chain management.</p>
      <div className='row p-5'>
          
          <div className='col-lg-5 p-2 mt-5 card1  ml-5'>
             <h3>Data Scientist</h3>
             <p>A data scientist uses data to understand and explain the phenomena around them, and help organizations make better decisions.</p>
             <img src={datasci} className='ml-auto imag'/>
           </div>

          <div className='col-lg-5 p-2 mt-5 card1 ml-5'>
             <h3>IOT Engineer</h3>
             <p> A specialist in connected objects, an IoT engineer develops innovative services that help users to receive, control and manage information.</p>
             <img src={iotengin} className='ml-auto imag'/>
          </div>

           <div className='col-lg-5 p-2 mt-5 card1  ml-5'>
              <h3>VR Engineer</h3>
              <p>Virtual reality engineering includes the use of 3D modelling tools and visualisation techniques as part of the design process.</p>
              <img src={vrengin} className='ml-auto imag'/>
           </div>

          <div className='col-lg-5 p-2 mt-5 card1 ml-5'>
             <h3>ML Engineer</h3>
             <p>A machine learning engineer ML engineer is a person in IT who focuses on researching, building and designing self-running process.</p>
             <img src={mlengin} className='ml-auto imag'/>
          </div>
      </div>
     </div>
    );
}