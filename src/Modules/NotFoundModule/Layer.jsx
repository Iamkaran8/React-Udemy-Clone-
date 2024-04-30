import React from 'react';
import foot1 from '../Services/Assets/volkswagen-light.svg';
import foot2 from '../Services/Assets/box-light.svg';
import foot3 from '../Services/Assets/nasdaq-light.svg';
import foot4 from '../Services/Assets/eventbrite-light.svg';
import foot5 from '../Services/Assets/netapp-light.svg';
import { Link } from 'react-router-dom';


const Layer = () => {
  return (
    <div>
                    <section className='bar py-3'>
                <div className='container'>
                    <div className='row justify-content-center text-center align-items-center'>
                        <div className='col-lg-6'>
                            <h6>Top companies choose <Link to='#' className='high-link'>Udemy Business</Link> to build in-demand career skills.</h6>
                        </div>
                        <div className='col-lg-6 d-flex justify-content-around flex-start'>
                            <img   src={foot1}  alt="volkswagen" />
                            <img   src={foot2}  alt="volkswagen" />
                            <img   src={foot3}  alt="volkswagen" />
                            <img   src={foot4}  alt="volkswagen" />
                            <img   src={foot5}  alt="volkswagen" />
                        </div>
                        </div>
                </div>
            </section>
    </div>
  )
}

export default Layer