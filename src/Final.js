import React from 'react';
import {  useSelector } from 'react-redux';
import { emptyPrice,emptyNumber, emptyBasket, newOrder } from './action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Final = () => {
  const basket = useSelector((state) =>state.basket);
  const price = useSelector((state) =>state.price);
  const number = useSelector((state) =>state.number);
  const addressData = useSelector((state) =>state.address);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const address=addressData.address
  const city=addressData.city
  const phone=addressData.phone
  const postalcode=addressData.postalcode
  return (<div >
     
    <table style={{display:"grid", gridTemplateColumns:"1fr" ,margin:"20px",padding:"20px 0"}}>
<tbody >
  {basket
    .map((item, index) => (
      <tr key={index} style={{ border:"1px dotted gray",padding:"20px " }}>
        <td> <img src={item.image} style={{ height:"50px",margin:"10px" }}></img></td>
        <td >  Item {index + 1}- </td>
        <td>{item.name} </td>
        <td> Price: {item.price}$</td>
        <td style={{padding:"20px "}}> Quantity: {item.qty}</td>
        
      </tr>
    ))}
</tbody>
</table>
<div style={{display:"grid", gridTemplateColumns:"1fr" ,padding:" 0 20px"}}>
<p>  Total price is : {price} $ </p>
<p> Shipping Address is : {city}- {address} </p>
<p> Postal Code : {postalcode}</p>
<p> Phone : {phone}</p>

</div>
<button 
       onClick={
        ()=>( 
        navigate("/basket")
        )
      }>
        Back </button>
<button 
       onClick={
        ()=>( 
        dispatch(newOrder(address,city,postalcode,phone)),
        localStorage.removeItem("basket"),
        localStorage.removeItem("number"),
        localStorage.removeItem("price"),
        dispatch(emptyBasket()),
        dispatch(emptyNumber()),
        dispatch(emptyPrice()),
        navigate("/")
        )
      }>
         Done </button>
    </div>)
}