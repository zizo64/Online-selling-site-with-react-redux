import "./App.css";
import"./style.css";
import "./bootstrap.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useSelector}from 'react-redux'
import Header from "./Header";
import{ Basket} from "./Basket";
import {Login} from "./Login";
import {Home} from "./Home";
import {Adress} from "./Adress";
import {Product} from "./Product";
import {Final} from "./Final";
import {Setting} from "./Setting";
import {Signup} from "./Signup";
import {Orders} from "./Orders";
import NotFoundPage from "./NotFound";
import {Eachorder} from "./Eachorder";
import Alreadylogin from "./Alreadylogin";
import Notlogin from "./Notlogin";
function App() {
  const {user} = useSelector((state) =>state.user);
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="*" element={<NotFoundPage/>} />
      <Route path="/" >
      <Route index  element={<Home/>}/>
            <Route path=":id" element={<Product/>}/>
      </Route>
      <Route path="basket" >
      <Route index  element={<Basket/>}/>
            <Route path="login">
            {user.id? <Route index  element={<Alreadylogin/>}/>: <Route index  element={<Login/>}/>}
                { user.id? <Route path="signup"  element={<Alreadylogin/>}/>: <Route path="signup" element={<Signup/>}/>}
            </Route>
            <Route path="adress">
            {user.id?  <Route index  element={<Adress/>}/>:<Route index  element={<Notlogin/>}/>}
            { user.id? <Route path="final" element={<Final/>}/> : <Route path="final"  element={<Notlogin/>}/>}
            {/* <Route path="final/basket" element={<Basket/>}/>  */}
            </Route>     
      </Route>
      { user.id ? <Route path="login"  element={<Alreadylogin/>}/>
      : <Route path="login"  element={<Login/>}/>}
      { user.id ? <Route path="login/signup"  element={<Alreadylogin/>}/>
      : <Route path="login/signup" element={<Signup/>}/>}
      { user.id ? <Route path="orders" element={<Orders/>}/>:
      <Route path="orders" element={<Notlogin/>}/>}
      { user.id ? <Route path="orders/:id" element={<Eachorder/>}/>:
      <Route path="orders/:id" element={<Notlogin/>}/>}
      { user.id ? <Route path="setting"  element={<Setting/>}/>:
      <Route path="setting" element={<Notlogin/>}/>}
       
    </Routes>  
    </BrowserRouter> 
  )
  }
export default App;
