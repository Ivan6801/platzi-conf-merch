import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (paylad) => {
    setState({
      ...state,
      cart: [...state.cart, paylad],
    });
  };
  const removeFromCart = (paylad) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id === paylad.id),
    });
  };

  return {
    addToCart,
    removeFromCart,
    state,
  };
};

export default useInitialState;