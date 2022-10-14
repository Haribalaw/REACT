import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import { Menubar } from '../MENU/menu';

export function Home(){
    return(
        <div>
            <Menubar/>
        <div className='text-center bg-primary p-5 col-lg-5 mr-auto ml-auto mt-5 rounded border border-warning'>
            <h1 className='font-weight-bold'>HELLO WORLD</h1>
        </div>
        </div>
    );
}