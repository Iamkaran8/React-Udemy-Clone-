import React, { useContext, useEffect, useState } from 'react';
import '../Styles/course.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../Services/ContextApi/Context';
// import { useCart } from '../Services/ContextApi/Context';





const Detailsbanner = () => {

    const {  setCustomers } = useContext(Context);
    const [ispending,setIsPending] = useState(true)
    const params = useParams();
    const [detail, setCourseData] = useState([]);
    useEffect(() => {
        axios.get(`https://my-json-server.typicode.com/Thamaraiselvi2109/sample/courselist/${params.id}`).then((response) => {
            setCourseData(response.data);
            console.log(setCourseData);
            setIsPending(false)
        });
    }, [params]);

    return (
        <div>
            {ispending && <h2 className='text-center'>Loading...</h2>}
            <section className='detail-1 py-5'>
                <div className='container'>
                    <div className='row align-items-center justify-content-center'>
                        <div className='col-lg-7'>
                            <h1>{detail.title}</h1>
                            <p>{detail.description1}</p>
                            <button className='bg-warning'>Best seller</button>&nbsp;&nbsp;<small>{detail.ratings}</small>
                            <p className='instructor py-3'>Created by{detail.instructor}</p>
                        </div>
                        <div className='col-lg-5 text-center py-3'>
                            <img src={detail.banner} alt={detail.title} />
                        </div>
                    </div>
                </div>
            </section>
            <section className='detail-2 py-5'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-7'>
                            <div className='descript px-3 py-3'>
                                <h3>What you'll learn</h3>
                                <p>
                                    {detail.description2}
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-5 py-5'>
                            <h4>Buy now</h4>
                            <p className='price'>{detail.price} - <small className='mrp'>{detail.mrp}</small></p>
                            <button className='add-cart px-5 py-2' onClick={() => setCustomers((prev) => [...prev, detail])} >Add to cart</button>
                        </div>
                    </div>
                </div>
                {/* {console.log(customer)} */}
            </section>
        </div>
    )
}


export default Detailsbanner;