import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { eachproductData } from './action';
import {useParams} from 'react-router-dom'
import { getNumber } from './action';
import { basketAction } from './action';
import { countInStockShow } from './action';
import { getPrice } from './action';
export const Product = () => {
  const params = useParams();
  const eachproduct= useSelector((state)=>state.eachproduct)
  const basket= useSelector((state)=>state.basket)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(eachproductData(params))},[]
  )
  const check= basket.findIndex(basket => basket.name == eachproduct.name)
  return (
    <div style={{backgroundColor:"darkgray", height:"500px",margin:"50px",padding:"30px"}}>
      <p style={{ fontStyle:"italic",fontWeight:"bold", textAlign:"center"}}> {eachproduct.name}</p>
      <p style={{ fontStyle:"italic"}}> Brand : {eachproduct.brand}</p>
      <p style={{ fontStyle:"italic"}}>  Price : {eachproduct.price}$</p>
      <p style={{ fontStyle:"italic"}}> Description : {eachproduct.description}</p>
      {/* <p style={{ fontStyle:"italic"}}>  Count In Stock : {eachproduct.countInStock}</p> */}
      <img src={eachproduct.image} style={{ height:"200px", }}></img>
       { !eachproduct.countInStock ? <p style={{ float:"right",margin:"100px",fontStyle:"italic",color:"red"}}> Is not available</p> : check === -1 ? 
       <button style={{ float:"right",margin:"100px",fontStyle:"italic"}}
      onClick={()=>{ 
        dispatch(basketAction(basket));
        dispatch(getNumber());
        dispatch(getPrice());
        eachproduct.countInStock=eachproduct.countInStock-1
      }}
      > add to basket</button> : <p style={{ float:"right",margin:"100px",fontStyle:"italic",color:"green"}}> Existing Item </p> }

    </div>
  )
 
}