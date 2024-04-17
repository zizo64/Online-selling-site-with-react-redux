import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector}from 'react-redux'
import { Dropdown, DropdownButton} from "react-bootstrap"
import { logoutUser, myOrder } from './action';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const number = useSelector((state) =>state.number);
  const {user} = useSelector((state) =>state.user);
  const dispatch=useDispatch()
  const navigate=useNavigate();
  localStorage.setItem("number", JSON.stringify(number))
  const  logout=()=>(
    localStorage.removeItem("users"),
    dispatch(logoutUser())
  )

  return (
    <div style={{display:"flex" ,justifyContent:"space-around",padding:"10px",backgroundColor:"lightgray"}}>
        <Link to="/" style={{textDecoration:"none",fontSize:"20px",color:"black",fontWeight:"bold"}}> Home </Link>
        <div>
          <Link to="basket"> 
            <span className='material-icons-two-tone' style={{fontSize:"40px",color:"black"}}> add_shopping_cart</span>
          </Link>
           <span style={{border:"1px solid black" , borderRadius:"50%",paddingRight:"5px",fontWeight:"bold"}}> {number}  </span>
       
        </div>
        <div >
        { user.id ?
        <DropdownButton id="dropdown-basic-button"  variant="secondary" style={{color:"black !important"}} title={user.email}>
        <Dropdown.Item onClick={()=> {
           navigate("./setting");
          }}>Setting</Dropdown.Item>
        <Dropdown.Item  onClick={()=> {
           navigate("./orders");
          dispatch(myOrder());
          }}>Orders</Dropdown.Item>
        <Dropdown.Item   onClick={()=> {
          logout();
          //  window.location.href = '/';
           }}>Log Out</Dropdown.Item>
      </DropdownButton>
         :  <Link to="login" style={{textDecoration:"none",fontSize:"20px",color:"black",fontWeight:"bold"}}> login </Link> }   
        </div>
    </div>
  )
}

export default Header

