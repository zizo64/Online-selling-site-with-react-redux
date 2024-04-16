import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { changeuserData } from './action';

export const Setting = () => {
  const [password,setPassword] = useState("");
  const [rePassword,setrePassword] = useState("");
  const [message,setMessage] = useState("");
  const passRegex=/^[A-Za-z]\w{5,10}$/;
  const dispatch=useDispatch()
  return (
    
    <div style={{backgroundColor:"darkgray", height:"500px",margin:"50px"}}>
    <h3 style={{display:"grid", gridTemplateColumns:"1fr",textAlign:"center" ,margin:"20px 0",padding:"20px",backgroundColor:"gray"}}> Change Password</h3>
    <div style={{backgroundColor:"white", width:"500px",margin:"20px auto", textAlign:"left",padding:"10px"}}>
    
    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr",padding:"10px"}}>
    <span > Password </span>
    <input  type="password" placeholder='7-12 characters,first must be letter ' value={password} 
    onChange= {(e) => {
          setPassword(e.target.value)
           {passRegex.test(password)? setMessage("Your pass looks good!"):setMessage("Please enter a valid pass!")}
            }}></input>
            <p> {message}</p>
    </div>
    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr",padding:"10px"}}>
    <span > Retype Password</span>
    <input type="password" value={rePassword} onChange= {(e) => {
              setrePassword(e.target.value)}}></input> 
     {(password != rePassword && rePassword) && <p style={{color:"red"}}>Is not like your password yet</p>}                
    </div>
    <div style={{textAlign:"center"}}>
    { (password == rePassword && passRegex.test(password)) &&  
    <button style={{backgroundColor:"black",color:"white",margin:"20px auto",padding:"5px 40px"}} 
     onClick={()=>{ 
      (dispatch(changeuserData(password)))
       ;}}
    > Aplly Setting </button>}
    </div>
    </div>
    </div>
  )
}