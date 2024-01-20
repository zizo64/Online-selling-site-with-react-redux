import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productData } from './action';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const dispatch=useDispatch()
  const {product}= useSelector((state)=>state.product)
  const navigate=useNavigate();
  useEffect(()=>{
    
    if(!product.length){
     dispatch(productData())}
   },[]
  ) 

  return (
    
    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr"}} >
        {product
        .map((item,index)=>{return( <div key={item._id} 
        style={{  height:"300px",textAlign:"center",border:"solid 1px black", margin:"20px",padding:"20px" }}>
    <img src={item.image} style={{ height:"100px", }}></img>
    <p style={{ fontStyle:"italic",fontWeight:"bold",fontSize:"14px"}}> {item.name}</p>
    <p style={{ fontStyle:"italic"}}> Price: {item.price} $</p>
    <p style={{ fontStyle:"italic"}}> Rating: {item.rating}/5</p>
    <button style={{ fontStyle:"italic",padding:"0"}} onClick={()=>navigate(`${item._id}`)}>More Information</button>
    </div>)})}</div>
  
  )
}