import CurrentTime from './CurrentTime';
import CountDown from './Countdown';
import React,{useState} from 'react';
import TodoList from './Todolist'
import './Homepage.css';

function HomePage(){
    const [CTstate,setCTstate]=useState(0);
    const Changepage=(state)=>{
      setCTstate(state) 
      }
    return (
        <div>
              <div className="homepage">
        <h1>Home Page</h1>
        <div id='navbar'>
        <button onClick={()=>Changepage(1)}>CurrentTime</button>
        <button onClick={()=>Changepage(2)}>CountDown</button>
        <button onClick={()=>Changepage(3)}>Todo List</button>
        <button onClick={()=>Changepage(4)}>API Call</button>
        </div>
        
        
      </div>
      <div id='changingpages'>
      {CTstate==1?<CurrentTime/>:CTstate==2?<CountDown/>:CTstate==3?<TodoList/>:<h4>Page To be Create</h4>}
      </div>
        </div>
    
    );
}
export default HomePage;