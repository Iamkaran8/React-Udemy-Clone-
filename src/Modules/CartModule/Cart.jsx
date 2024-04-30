import React, { useContext } from 'react'
import { Context } from '../Services/ContextApi/Context';
import Nocart from './Nocart';
import Fillcart from './Fillcart';


const Cart = () => {
  const { customer } = useContext(Context);

  if (customer.length === 0) {
    return (
      <>
        <Nocart></Nocart>
      </>
    )
  }
  else{
    return (
      <div>
        <Fillcart></Fillcart>
      </div>
    )
  }

}

export default Cart;