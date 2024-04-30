import React, { useContext } from 'react'
import { Context } from '../Services/ContextApi/Context';
import '../Styles/nocart.css';
import star from '../Services/Assets/star.jpg'

const Fillcart = () => {
    const { customer, setCustomers } = useContext(Context);
  const removeItem = (indexToRemove) => {
    setCustomers(prevItems => prevItems.filter((customer, index) => index !== indexToRemove));
  };

  return (
    <div className='container py-5'>
        <div className='nocart'>
            <h2 className='py-3'>Shopping Cart</h2>
            <h6>{customer.length}  Courses in Cart</h6>
            {customer.map((data,index)=>
            <div className='row fill align-items-center py-3 my-3'>
                <div className='col-lg-5'>
                    <img
                        src={data.banner}
                        alt={data.title}
                        className='img'
                    /> 
                </div>
                <div className='col-lg-7'>
                    <h5>{data.title}</h5>
                    <p>{data.description1}</p>
                    <img src={star} alt="star" className='mb-3' />
                    <p className='price'>{data.price} - <small className='mrp'>{data.mrp}</small></p> 
                    <button  className="btn btn-Enquiry me-3" onClick={() => removeItem(index)}>Remove Item</button>
                    <button  className="btn btn-Enquiry">Buy now!</button>
                </div>
            </div>
            )}
            </div>
        </div>
  )
}

export default Fillcart