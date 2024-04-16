import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { eachorderData } from './action';
import {useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { computeHeadingLevel } from '@testing-library/react';
export const Eachorder = () => {
    const params = useParams();
    const {eachorder}= useSelector((state)=>state.eachorder)
    const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(eachorderData(params))},[]
  )
  return (<div style={{backgroundColor:"darkgray",margin:"50px",padding:"50px"}}>
    
<p > Total Price: {eachorder.totalPrice}$</p>
<p > Address: {eachorder.shippingAddress?.city}-{eachorder.shippingAddress?.address}</p>
<p > Customer: {eachorder.user?.name}, Phone:({eachorder.shippingAddress?.phone})</p>

  <div style={{display:"grid", gridTemplateColumns:"1fr"}}>
   {eachorder.orderItems?.map((item,index)=>{return( <div >
     <h3> Item Number: {index+1}</h3>
    <p> {item.name}</p>
    <p> Price :  {item.price} $</p>
   <p> Quantity: {item.qty}</p>
   <img src={item.image}style={{ height:"100px",float:"right" ,margin:"-100px 30px 20px 0"}}></img>

  </div>)})}</div>
    </div>)
}