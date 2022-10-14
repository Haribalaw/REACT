import {React,useState} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import { Menubar } from '../MENU/menu';


export function Coun(){
        const [count,setCount]=useState(0);
    return(
        <>
        <Menubar/>
        <div className='text-center p-5 border col-4 ml-auto mr-auto mt-5 bg-info rounded'>
            <h1 className='font-weight-bold'>{count}</h1>
            <button onClick={()=>setCount(count+1)} className="btn btn-success">INCREASE</button>
            <button onClick={()=>setCount(count-1)} className="btn btn-danger ml-2">DECREASE</button>
            <button onClick={()=>setCount(count*0)} className="btn btn-primary ml-2">RESET</button>
        </div>
        </>
    );
}