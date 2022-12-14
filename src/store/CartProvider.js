import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
 items: [],
 totalAmount: 0

}

const cartReducer = (state, action) =>{

 // LOGIC TO ADD AN ITEM - START
 if(action.type === 'ADD'){
   console.log('reaching add ')
   // concat : adds the item to an array but unlike push it doesnt edit the existing array but rtn a new array
   // const updatedItems = state.items.concat(action.item);
   const updatedTotalAmount =
     state.totalAmount + action.item.price * action.item.amount
   // will rtn index or null : if the item we are looking for in an array has the same id as action dispatched rtn index
   const existingCartItemIndex = state.items.findIndex(
     (item) => item.id === action.item.id
   )
   const existingCartItem = state.items[existingCartItemIndex]

   let updatedItems

   if (existingCartItem) {
     const updatedItem = {
       ...existingCartItem,
       amount: existingCartItem.amount + action.item.amount,
     }
     updatedItems = [...state.items]
     // get the already existing item from the cart and override it with this existingCartItem to avoid duplication
     updatedItems[existingCartItemIndex] = updatedItem
   } else {
     // if it doesnt exist that is existingCartItem was null aka falsy then simply just add it
     updatedItems = state.items.concat(action.item)
   }
   // LOGIC TO ADD AN ITEM - END

   return {
    items: updatedItems,
    totalAmount: updatedTotalAmount,
   }
  }
  // LOGIC TO REMOVE AN ITEM - START
  if (action.type === 'REMOVE') {
   console.log('reaching remove item');
   const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
   const existingItem = state.items[existingCartItemIndex];
   const updatedTotalAmount = state.totalAmount - existingItem.price;

   let updatedItems;
   if(existingItem.amount === 1){
    updatedItems = state.items.filter(item => item.id !== action.id);
   }else{
     const updatedItem = {...existingItem, amount: existingItem.amount-1 };
     updatedItems = [...state.items];
     updatedItems[existingCartItemIndex] = updatedItem;
   }
   return {
    items:updatedItems,
    totalAmount: updatedTotalAmount
   }
  }
  // LOGIC TO REMOVE AN ITEM - END
 // your reducer function needs to rtn a default state
 return defaultCartState
}

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
   dispatchCartAction({type:'ADD', item:item})
  }

  const removeItemFromCartHandler = (id) => {
   dispatchCartAction({ type: 'REMOVE', id: id })
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  }

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartProvider;