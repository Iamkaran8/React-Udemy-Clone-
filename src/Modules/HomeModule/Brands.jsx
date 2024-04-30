import React, { useContext } from 'react';
import { Context } from '../Services/ContextApi/Context';
import '../Styles/home.css';
import {  Slide } from 'react-awesome-reveal';

const Brands = () => {
    const { Patners } = useContext(Context)
    return (
        <div>
            <section className='section-2 mb-5'>
                <div className='container'>
                    <h2>Trusted by over 15,000 companies and millions of learners around the world</h2>
                    <div className='brand d-flex justify-content-between'>
                        {Patners.map((data) =>
                            <Slide direction='up'>
                                <img key={data.id} src={data.img} alt={data.name} />
                            </Slide>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Brands;