import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { addressAction, newOrder } from './action';
import { useNavigate } from 'react-router-dom';

export const Adress = () => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalcode,setPostalcode] = useState("");
  const [phone,setPhone] = useState("");
  const navigate=useNavigate();
  const dispatch=useDispatch()
  return (<>
   <div style={{backgroundColor:"darkgray", height:"500px",margin:"50px"}}>
    <h3 style={{display:"grid", gridTemplateColumns:"1fr",textAlign:"center" ,margin:"20px 0",padding:"20px",backgroundColor:"gray"}}> Post Information</h3>
    <div style={{backgroundColor:"white", width:"500px",margin:"20px auto", textAlign:"left",padding:"10px"}}>
    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr",padding:"10px"}}>
    <span > Address</span>
    <input  type="address" value={address} onChange= {(e) => {
              setAddress(e.target.value)}}></input>
    </div>
    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr",padding:"10px"}}>
    <span > City</span>
    <input  type="name" value={city} onChange= {(e) => {
              setCity(e.target.value)}}></input>
    </div>
    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr",padding:"10px"}}>
    <span> Postal Code </span>
    <input  value={postalcode} onChange= {(e) => {
              setPostalcode(e.target.value)}}></input>
    </div>
    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr",padding:"10px"}}>
    <span > Phone Number </span>
    <input   value={phone} onChange= {(e) => {
              setPhone(e.target.value)}}></input>
    </div>
    <div style={{textAlign:"center"}}>
      {( phone && address && postalcode && phone ) && <button onClick={()=>(
      dispatch(addressAction(address,city,postalcode,phone)),
      navigate("./final"))}
      style={{backgroundColor:"black",color:"white",margin:"20px auto",padding:"5px 40px"}}
      > next </button>}
     
    </div>
   </div>
     </div>
  </>
   
  )
}