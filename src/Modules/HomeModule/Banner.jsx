import React from 'react'
import '../Styles/home.css';

const Banner = () => {
    return (
        <>
            <section className='pe-2 ps-2 mb-4'>
                <div className="banner">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6 col-lg-4 banner-text'>
                                <h2>Keep moving up</h2>
                                <p>Learn the skills you need to take the next step — and every step after. Courses from ₹499. Sale ends today.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;