import  {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {getAllPizzareducer,addPizzareducer,getPizzaByIdReducer,updatePizzaByIdReducer} from './reducers/pizzaReducers';
import { cartReducer } from './reducers/cartReducer';
import { registerUserReducer, loginUserReducer,getAllUsereducer } from './reducers/userReducer';
import { placeOrderReducer,getUserOrdersReducer,allUserOrdersReducer} from './reducers/orderReducer';
  
const cartItems = localStorage.getItem("cartItems")
 ? JSON.parse(localStorage.getItem("cartItems")) : [];


 const currentUser = localStorage.getItem("currentUser")
 ? JSON.parse(localStorage.getItem("currentUser")):null

const rootReducer = combineReducers({
    getAllPizzareducer:getAllPizzareducer,
    cartReducer:cartReducer,
    registerUserReducer:registerUserReducer,
    loginUserReducer:loginUserReducer,
    placeOrderReducer:placeOrderReducer,
    getUserOrdersReducer:getUserOrdersReducer,
    addPizzareducer:addPizzareducer,
    getPizzaByIdReducer:getPizzaByIdReducer,
    updatePizzaByIdReducer:updatePizzaByIdReducer,
    allUserOrdersReducer:allUserOrdersReducer,
    getAllUsereducer:getAllUsereducer

 

    
});

const initialState = {

    cartReducer :{
        cartItems : cartItems,
    },
   loginUserReducer : {
       currentUser:currentUser,
   },


};
const middeleware = [thunk];
const store =createStore(
    rootReducer,initialState,composeWithDevTools(applyMiddleware(...middeleware))
    );

export default store;
