import React from 'react';
import "./bootstrap.css";
import { Table } from "react-bootstrap";
import {useDispatch,useSelector } from 'react-redux';
import {getNumber} from './action';
import {getPrice} from './action';
import {deleteItem} from './action';
import {plusItem} from './action';
import {availableItem} from './action';
import {minusItem} from './action';
import { useNavigate } from 'react-router-dom';


export const Basket = () => {

  const basket = useSelector((state) =>state.basket);
  const price = useSelector((state) =>state.price);
  const {user}= useSelector((state) =>state.user);
  const number = useSelector((state) =>state.number);
  const dispatch=useDispatch()
  const navigate=useNavigate();
  
  localStorage.setItem("basket", JSON.stringify(basket))
  localStorage.setItem("price", JSON.stringify(price))
  return (
    <div>
    <Table striped bordered hover>
       <thead>
         <tr>
           <th style={{textAlign:"center"}}>#</th>
           <th>Name</th>
           <th>Price</th>
           <th>Quantity</th>
           <th>Count In Stock </th>
           <th> Image</th>
        </tr>
      </thead>
      <tbody>
        {basket.map((item, index) => (
        <tr key={index}>
           <td style={{textAlign:"center"}}> {index + 1} </td>
           <td>{item.name}</td>
           <td>{item.price} $</td>
           <td >
              <div>
                {  item.countInStock > 0 && <button style={{padding:"0 4px"}}
                    onClick={()=>{ 
                      
                      dispatch(plusItem(basket,index));
                      dispatch(availableItem(basket,index))
                      dispatch(getNumber())
                      dispatch(getPrice())
                                         
                       }}
               >+</button>
                }
        
               { item.qty>1 &&  <button style={{padding:"0 4px"}}
                onClick={()=>{ 

                 
                  dispatch(minusItem(basket,index));
                  dispatch(availableItem(basket,index))
                  dispatch(getNumber())
                  dispatch(getPrice())
                  ;}}
               >-</button >
                }
              <button  style={{padding:"0 4px"}} onClick={()=>{
                  dispatch(deleteItem(index))
                  dispatch(getNumber())
                  dispatch(getPrice())
                  // dispatch(availableItem(basket,index))
                 }}
              > X </button>
               <p> QTY: {item.qty}</p>
              </div>
            </td>
            <td> {item.countInStock}</td>
            <td> <img src={item.image} style={{ height:"50px", }}></img></td>
          </tr>
          ))}
        </tbody>
    </Table>
    <div style={{display:"grid", gridTemplateColumns:"1fr" ,padding:"20px"}}>
      <span style={{textAlign:"center" ,margin:"20px 0",padding:"20px",backgroundColor:"gray", border:"1px solid black", fontStyle:"italic",fontWeight:"bold"}}>   Total price is {price.toFixed(2)} $ </span>
    </div>
       { number ==0 ?  <p style={{margin:"5px 100px",float:"right",fontStyle:"italic",fontWeight:"bold"}}> your basket is empty </p>: user.id ? <button onClick={
         ()=>{
           navigate("./adress");
        }}
        style={{margin:"5px 100px", float:"right"}}> next </button> :

       <button onClick={()=>navigate("./login")} style={{margin:"5px 100px",float:"right"}}> login </button>
       }
       </div>
      )
}
