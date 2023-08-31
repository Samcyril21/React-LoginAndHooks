import React,{useState} from "react";
import './Todolist.css';

function TodoList(){
    const [todoArrray,setTodoArray] = useState([])
    const [inpTask,setInpuTask] = useState('')
    const collecttask = (e)=>{
        setInpuTask(e.target.value)
        console.log(e.target.value)
    }
    const addtask = ()=>{
        let temparr = [...todoArrray]
        temparr.push(inpTask)
        setTodoArray(temparr)
        console.log(todoArrray)
        setInpuTask('')

    }
    const remove = (ind)=>{
        let temparr = [...todoArrray]
        temparr.splice(ind,1)
        setTodoArray(temparr)
        console.log(todoArrray) 
    }
    return(
        <div id='todolistcontainer'>
        <input name='inptask' id='todoinput' value={inpTask} placeholder="Enter the task" onChange={collecttask}></input>
        <button onClick ={addtask}>Add</button>
        <div>
            <h2>Tasks</h2>
            {todoArrray.map((ele,index)=>{
                if(ele.length < 0){
                    alert("Enter the task")
                }else{
                    return(
                        <div key={index} id="taskcontainer"><span>{index+1}. {ele}</span><button onClick={()=>remove(index)}>Remove</button></div>
                     )
                }
            
            })
            }
        </div>
        </div>
    )
}
export default TodoList;