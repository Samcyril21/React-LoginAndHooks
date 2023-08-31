import HomePage from './HomePage';
import React,{useState} from 'react';
import './LoginFunc.css'

export default function Loginfunc(){
  const credentials=[
    {
    username :'sam',
    password : 1234
  },
  {
    username : 'abhi',
    password : 5678
  }
]


 const [isLogin,setIsLogin]=useState(false)
  const [userInfo,setUserInfo]=useState([{
    username:"",
    pasword:""
  }
  ])
 const [showMessage,setShowMessage] = useState('')



  const getInputs = (event)=>{
     let key = event.target.name
     setUserInfo({...userInfo,[key]:event.target.value})
     console.log({...userInfo,[key]:event.target.value})
  }

  const check = (e)=>{
    e.preventDefault();
    let userIndex = credentials.findIndex((ele)=> ele.username == userInfo.username) 
    console.log(userIndex)
    if(userIndex == -1){
      console.log("Inavalid User Or User Doesn't Exist ")
      setShowMessage("Inavalid User Or User Doesn't Exist ")
    }else{
      if(credentials[userIndex].username== userInfo.username && credentials[userIndex].password== userInfo.password){
        console.log('Authenticated')
        setIsLogin(true)
        alert("Succesfully loggedIn")
      }else{
        setShowMessage("Incorrect Password")
        console.log("Incorrect Password")
      }
    }
  }
    const Loginform =()=>{
        return(
            <div id='logincontainer'>
            <form onSubmit={check} id="loginform">
            <lable for="uname">User Name : </lable>
            <input id="uname" type="text" name="username" placeholder="UserName" value={userInfo.username} onChange={getInputs}></input>
            <lable for="paaswrd">Password : </lable>
            <input id="paaswrd" type="password" name="password" placeholder="Password" value={userInfo.password} onChange=  {getInputs}></input>
            <p>{showMessage}</p>
            <button type="submit">Login</button>
            </form>
            </div>
           )
    }
    return(isLogin?<HomePage/>:Loginform())
}