import React, { useContext } from 'react'
import { Context } from '../Services/ContextApi/Context';
import '../Styles/nocart.css';
import empty from '../Services/Assets/empty-shopping.jpg';
import { Link } from 'react-router-dom';



const Nocart = () => {
    const {customer} = useContext(Context);
  return (
    <div className='container py-5'>
        <div className='nocart'>
            <h2 className='py-3'>Shopping Cart</h2>
            <h6>{customer.length}  Courses in Cart</h6>
            <div className='empty'>
                <img
                    src={empty}
                    alt="empty"
                />
                <p>Your cart is empty. Keep shopping to find a course!</p>
                <Link to='/' className="btn btn-Enquiry">Keep Shoping</Link>
            </div>
        </div>
    </div>
  )
}

export default Nocart