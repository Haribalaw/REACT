import {React,useState,useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import { Menubar } from '../MENU/menu';


export function Son(){
    const[data,setData]=useState([]);
    useEffect(()=>{
             fetch('https://jsonplaceholder.typicode.com/todos/')
             .then((response)=>response.json())
             .then((detail)=>{
                setData(detail)
             })
},[])
return(
   
    <div>
         <Menubar/>
        <div className='row p-5'>
        {data.map((value,index)=>(
            
            <div className='card p-5 col-lg-3 bg-secondary border-lg border-info text-center text-white'>
              <h1>{value.id}</h1>
              <p>{value.title}</p>
           </div>
        ))}
        </div>
    </div>
      
);
}