
import {Coun} from './COMPONENTS/COUNTER/Count';
import { Menubar } from './COMPONENTS/MENU/menu';
import { Card } from './COMPONENTS/CARD/Card';
import { Tech } from './COMPONENTS/TECH/Tech';
import { League } from './COMPONENTS/LEAGUE/League';
import { Home } from './COMPONENTS/HOME/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Fruit } from './COMPONENTS/FRUITCOUNTER/Fruits';
import { Feed } from './COMPONENTS/FEEDBACK/Feedback';
import { Feedthank } from './COMPONENTS/FEEDBACK/Feedthank';
import { Son } from './COMPONENTS/SON/son';




function App() {
  return (
    <div>
       
      <BrowserRouter>
             <Routes>
                <Route path='/' element={<Menubar/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/card' element={<Card/>}/>
                <Route path='/league' element={<League/>}/>
                <Route path='/technologies' element={<Tech/>}/>
                <Route path='/counter' element={<Coun/>}/>
                <Route path='/fruitcounter' element={<Fruit/>}/>
                <Route path='/feedback' element={<Feed/>}/>
                <Route path='/feedthank' element={<Feedthank/>}/>
                <Route path='/cards' element={<Son/>}/>
             </Routes>
      </BrowserRouter> 
      
    </div>
  );
}

export default App;
