import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { myOrder } from './action';
import { useNavigate } from 'react-router-dom';
export const Orders = () => {
  const dispatch=useDispatch()
  const {order}= useSelector((state)=>state.order)
  const navigate=useNavigate();

  useEffect(()=>{  
    if(!order.length){
     dispatch(myOrder())}
   },[]
  ) 
  return(<>
       <div style={{display:"grid", gridTemplateColumns:" 1fr"}} >
  {order.map((item,index)=>{return( <div key={item._id} style={{ border:"solid 1px black", margin:"30px"}}>
 <span style={{ fontWeight:"bold",fontStyle:"italic"}}>  {index + 1}.  </span>
 <span style={{ fontWeight:"bold",fontStyle:"italic"}} > Order ID: </span>  
<span > {item._id}</span>
<span style={{ fontWeight:"bold",fontStyle:"italic"}} >  ----------Total Price: </span>  
<span> {item.totalPrice?.toFixed(2)}</span>
<button style={{float:"right"}} onClick={()=>navigate(`${item._id}`)

}>View Details</button>

</div>)})}</div>
</>
  )}