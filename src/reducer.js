
export const productReducer = (
  state = { product: [],  error: "" },
  action
) => {
  switch (action.type) {
    case "get_product_succes":
      return { ...state, product: action.payload, error: false };
    case "get_product_failed":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const userReducer = (
  state = { user: {},  error: "" },
  action
) => {
  switch (action.type) {
    case "post_newuser_succes":
      return { ...state, user: action.payload, error: false };
    case "post_newuser_failed":
      return { ...state, error: action.payload };
    case "post_loginuser_succes":
        return { ...state, user: action.payload, error: false };
    case "post_loginuser_failed":
        return { ...state, error: action.payload }
        case "get_userdata_succes":
          return { ...state, user: action.payload, error: false };
    case "get_userdata_failed":
          return { ...state, error: action.payload }
    case "put_changeuserdata_succes":
            return { ...state, user: action.payload, error: false };
    case "put_changeuserdata_failed":
            return { ...state, error: action.payload }
    case "logout-user":
              return { ...state, user: action.payload, error: false };
    default:
      return state;
  }
};
export const orderReducer = (
  state = { order: [],  error: "" ,flag:true},
  action
) => {
  switch (action.type) {
    case "post_neworder_succes":
      return { ...state, order: action.payload, error: false };
    case "post_neworder_failed":
      return { ...state, error: action.payload };
      case "get_myorder_succes":
        return { ...state, order: action.payload, error: false };
      case "get_myorder_failed":
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  export const eachorderReducer = (
    state = { eachorder: {},  error: "" },
    action
  ) => {
    switch (action.type) {
    case "get_eachorder_succes":
            return { ...state, eachorder: action.payload, error: false };
    case "get_eachorder_failed":
            return { ...state, error: action.payload };
   default:
          return state;
      }
    };

export const eachproductReducer = (
  state = { eachproduct: {},  error: ""},
  action
) => {
  switch (action.type) {
    case "get_eachproduct_succes":
      return   action.payload;
    case "get_eachproduct_failed":
      return   action.payload 
    default:
      return state;
  }
};
export const basketReducer = (state = [] , action) => {
  switch (action.type) { 
case "basket":
     return  action.payload; 
case "deleteItem":
      return action.payload ;
case "plus":
     return  action.payload ; 
case "minus":
     return  action.payload ;   
case "available":
      return  action.payload ;    
case "emptybasket"  :
       return  action.payload ;            
    default:
      return state;
  }
};
export const numberReducer = (state = 0 , action) => {
  switch (action.type) {
    case "totalNumber":
      return  action.payload ;
      case "emptynumber":
        return  action.payload ; 
    default:
      return state;
  }
};
export const priceReducer = (state = 0 , action) => {
  switch (action.type) {
    case "totalprice":
      return  action.payload ;
      case "emptyprice":
      return  action.payload ;
    default:
      return state;
  }
};
export const addressReducer = (state = {}, action) => {
  switch (action.type) {
    case "address":
      return   action.payload;
    default:
      return state;
  }
};