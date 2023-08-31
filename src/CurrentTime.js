import React,{useState}from 'react';
import './CurrentTime.css';


function CurrentTime(){
const [Ctime,setCtime] = useState(new Date().toLocaleTimeString())
const intervalId = setInterval(() => {
    setCtime(new Date().toLocaleTimeString());
}, 1000);
return(
    <div id="timediv"><p>{Ctime}</p></div>
);
}
export default CurrentTime;