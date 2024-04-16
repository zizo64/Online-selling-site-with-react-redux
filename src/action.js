
import axios from "axios";
export const productData = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      "http://5.161.141.215:5000/api/products/"
    );
    // localStorage.setItem("products", JSON.stringify(data));
    dispatch({ type: "get_product_succes", payload: [...data] });
  } catch (error) {
    console.log(error.message);
    dispatch({ type: "get_product_failed", payload: error.message });
  }
};
export const eachproductData = (params) => async (dispatch, getState) => {
  try {
    const {data}  = await axios.get(
      `http://5.161.141.215:5000/api/products/${params.id}`
    );
    dispatch({ type: "get_eachproduct_succes", payload: data});
  } 
  catch (error) {
    dispatch({ type: "get_eachproduct_failed", payload: error.message });
  }
};
export const newUser =(name,email, password)  => async (dispatch, getState) => {
  try {
    const {data}  =await axios.post(
    
    `http://5.161.141.215:5000/api/users`,{name:name,email:email,password:password}
    )
    localStorage.setItem("users", JSON.stringify(data));
    dispatch({ type: "post_newuser_succes", payload: data});
  } 
  catch (error) {
    dispatch({ type: "post_newuser_failed", payload: error.message });
  }
};
export const loginUser =(email, password)  => async (dispatch, getState) => {
  try {
    const {data}  =await axios.post(
    
    `http://5.161.141.215:5000/api/users/login`,{email:email,password:password}
    )
    localStorage.setItem("users", JSON.stringify(data));
    dispatch({ type: "post_loginuser_succes", payload: data});
  } 
  catch (error) {
    dispatch({ type: "post_loginuser_failed", payload: error.message });
  }
};
export const userData =()  => async (dispatch, getState) => {
  const token= getState().user.user.token
   try {
    const {data}  =await axios.get(
       `http://5.161.141.215:5000/api/users/profile`,{
       headers:{
         'Content-Type' :"application/json",
         Authorization:`Bearer ${token}`
       }}
    )
    localStorage.setItem("users", JSON.stringify(data));
    dispatch({ type: "get_userdata_succes", payload: data});
  } 
  catch (error) {
    dispatch({ type: "get_userdata_failed", payload: error.message });
  }
};
export const changeuserData =(password)  => async (dispatch, getState) => {
  const token= getState().user.user.token
  const name= getState().user.user.name
  const email=getState().user.user.email
  try {
    const {data}  =await axios.put(
       `http://5.161.141.215:5000/api/users/profile`,{name:name,email:email,password:password},
       {
       headers:{
         'Content-Type' :"application/json",
         Authorization:`Bearer ${token}`
       }}
    )
    localStorage.setItem("users", JSON.stringify(data));
    dispatch({ type: "put_changeuserdata_succes", payload: data});
  } 
  catch (error) {
    dispatch({ type: "put_changeuserdata_failed", payload: error.message });
  }
};
export const newOrder =(address,city,postalcode,phone)  => async (dispatch, getState) => {
const totalPrice= getState().price
const basket= getState().basket
const token= getState().user.user.token
 try {
    const {data}  =await axios.post(
   "http://5.161.141.215:5000/api/orders",{orderItems:basket,
    shippingAddress:{address:address,city:city,postalCode:postalcode,phone:phone},
    paymentMethod:"cart",
    itemsPrice: totalPrice,
    shippingPrice:"0.00",
    totalPrice: totalPrice,
    },
    {headers:{
      'Content-Type' :"application/json",
      Authorization:`Bearer ${token}`
    }}
    )
    dispatch({ type: "post_neworder_succes", payload: data});
  } 
  catch (error) {
    dispatch({ type: "post_neworder_failed", payload: error.message });
  }
};
export const myOrder =()  => async (dispatch, getState) => {
  const token= getState().user.user.token
   try {
      const {data}  =await axios.get(
     "http://5.161.141.215:5000/api/orders/myorders",
      {headers:{
        'Content-Type' :"application/json",
        Authorization:`Bearer ${token}`
      }}
      )
      dispatch({ type: "get_myorder_succes", payload: data});
    } 
    catch (error) {
      dispatch({ type: "get_myorder_failed", payload: error.message });
    }
  };
  export const eachorderData = (params) => async (dispatch, getState) => {
    const token= getState().user.user.token
    try {
      const {data}  = await axios.get(
        `http://5.161.141.215:5000/api/orders/${params.id}`,
        {headers:{
          'Content-Type' :"application/json",
          Authorization:`Bearer ${token}`
        }}
      );
      dispatch({ type: "get_eachorder_succes", payload: data});
    } 
    catch (error) {
      dispatch({ type: "get_eachorder_failed", payload: error.message });
    }
  };
export const basketAction = (basket) => (dispatch, getState) => {
  const name= getState().eachproduct.name
  const price= getState().eachproduct.price
  const countInStock= (getState().eachproduct.countInStock)-1
  const qty = 1
  const product= getState().eachproduct._id
  const image= getState().eachproduct.image
  const help={name,price,countInStock,product,image,qty}
  dispatch({ type: "basket", payload: [...basket,help] });
};
export const getNumber = () => (dispatch, getState) => {
  const x=getState().basket.length
  var num=0;
  for(let i=0;i<x;i++){
  var y = getState().basket[i].qty
  num = num+y
  };
  dispatch({ type: "totalNumber", payload: num });
};
export const getPrice = () => (dispatch, getState) => {
  const x=getState().basket.length
  var price=0;
  for(let i=0;i<x;i++){
  var y = getState().basket[i].price
  var z = getState().basket[i].qty
  price = price+y*z
  };
  dispatch({ type: "totalprice", payload: price });
};

export const deleteItem = (index) => (dispatch, getState) => {
  const help= getState().basket
  help.splice(index,1)
  dispatch({ type: "deleteItem", payload: [...help] });
};
export const plusItem = (basket,index) => (dispatch, getState) => {
  basket[index].qty=basket[index].qty+1
  dispatch({ type: "plus", payload: [...basket] });
};
export const minusItem = (basket,index) => (dispatch, getState) => {
  basket[index].qty=basket[index].qty-1
  dispatch({ type: "minus", payload: [...basket] });
};
export const availableItem = (basket,index) => (dispatch, getState) => {
  basket[index].countInStock = (getState().eachproduct.countInStock) -(basket[index].qty)+1
  dispatch({ type: "available", payload: [...basket] });
};
export const addressAction = (address,city,postalcode,phone) => (dispatch, getState) => {
  dispatch({ type: "address", payload: {address,city,postalcode,phone} });
};
export const emptyBasket = () => (dispatch, getState) => {
  dispatch({ type: "emptybasket", payload: [] });
};
export const emptyNumber = () => (dispatch, getState) => {
  dispatch({ type: "emptynumber", payload: 0 });
};
export const emptyPrice = () => (dispatch, getState) => {
  dispatch({ type: "emptyprice", payload: 0 });
};
export const logoutUser = () => (dispatch, getState) => {
  dispatch({ type: "logout-user", payload: {} });
};