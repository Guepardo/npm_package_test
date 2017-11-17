import update from 'immutability-helper';

//----------------------------------
//  Constants
//----------------------------------
export const PURGE_CART = 'PURGE_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_TO_CART = 'REMOVE_TO_CART';

//----------------------------------
//  Actions
//----------------------------------

export function purgeCart() {
  return {
    type: PURGE_CART
  };
}

export function addToCart(product, portion) {
  return {
    type: ADD_TO_CART,
    product,
    portion
  };
}

export function removeToCart(product, portion) {
  return {
    type: REMOVE_TO_CART,
    product,
    portion
  };
}

//----------------------------------
//  Reducers
//----------------------------------

const initialState = {
  cart: [],
  totalPrice: 0,
  totalItems: 0
};

function CartReducer(state = initialState, action) {
  switch (action.type) {
    case PURGE_CART:
      return update(state, {
        cart: { $set: [] }
      });
    case ADD_TO_CART:
      return update(state, {
        cart: {
          $push: [{ id: action.product.id, price: action.product.price }]
        },
        totalPrice: {
          $set: state.totalPrice + action.product.price * action.portion
        },
        totalItems: {
          $set: state.totalItems + action.portion
        }
      });
    case REMOVE_TO_CART:
      // TODO: fazer o map para retirar o primeiro item com o id
      return update(state, {
        // cart: { 
        //   $push: [{ id: action.product.id, price: action.product.price }] 
        // }, 
        totalPrice: {
          $set: state.totalPrice - action.product.price * action.portion
        },
        totalItems: {
          $set: state.totalItems - action.portion
        }
      });
    default:
      return state;
  }
}

export default CartReducer;