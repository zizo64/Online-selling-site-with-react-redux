import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './action';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
 
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
    const [password,setPassword] = useState("");
    const {user}= useSelector((state)=>state.user);
    const navigate=useNavigate();
    const dispatch=useDispatch()

    const  validate=()=>{
      if(!user.id){setMessage("wrong email or password")}
    }

  return (<>
  <div style={{backgroundColor:"darkgray", height:"500px",margin:"50px"}}>
    <h3 style={{display:"grid", gridTemplateColumns:"1fr",textAlign:"center" ,margin:"20px 0",padding:"20px",backgroundColor:"gray"}}> Login</h3>
    <div style={{backgroundColor:"white", width:"500px",margin:"20px auto", textAlign:"left",padding:"10px"}}>
    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr",padding:"10px"}}>
    <span > Email</span>
    <input  type="email" value={email} onChange= {(e) => {
              setEmail(e.target.value);
              setMessage("")}}></input>
    </div>
    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr",padding:"10px"}}>
    <span > Password </span>
    <input  type="password" value={password} onChange= {(e) => {
              setPassword(e.target.value);
              setMessage("")}}></input>
    </div>
    <div style={{textAlign:"center"}}>
    
    {(email && password ) && <button style={{backgroundColor:"black",color:"white",margin:"20px auto",padding:"5px 40px"}}
     onClick={()=>{ 
      dispatch(loginUser(email,password));
      ;validate()
       ;}}
     > login </button> }
     <button onClick={()=>navigate("./signup")} style={{backgroundColor:"black",color:"white",margin:"20px auto",padding:"5px 40px"}}> sign up </button>
    </div>
    <p style={{textAlign:"center",color:"red"}}> {message} </p> 
   </div>
     </div>
  </>
   
  )
}