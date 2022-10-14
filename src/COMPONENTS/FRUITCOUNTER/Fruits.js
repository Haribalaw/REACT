import {React,useState} from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import './Fruits.css';

import mango from './mango.png'

import banana from './banana.jpg'
import { Menubar } from '../MENU/menu';

export function Fruit(){
    var [count,setCount]=useState(0);
    var [count1,setCount1]=useState(0);
    return(
        <>
          <Menubar/>
          <div className="fruitdiv p-5 col-lg-9 ml-auto mr-auto mt-5">
            
                <div className="bg-white text-center p-5 rounded">
                    <h1 className="font-weight-bold">Bob ate <span className="spn">{count}</span> mangoes and <span className="spn"> {count1}</span> bananas</h1>
                    <div className='row col-lg-12'>
                        <div className='col-lg-6'>
                            <img src={mango} className='col-lg-12'/><br/>
                            <button onClick={()=>setCount(count+1)} className="btn btn-primary">Eat Mango</button>
                        </div>
                        <div className='col-lg-6'>
                            <img src={banana} className='col-lg-7'/><br/>
                            <button onClick={()=>setCount1(count1+1)} className="btn btn-primary">Eat Banana</button>
                        </div>
                    </div>
                 </div>
          </div>
        </>
    );
}