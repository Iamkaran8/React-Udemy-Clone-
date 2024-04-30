import React, { useContext } from 'react';
import '../Styles/testi.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Context } from '../Services/ContextApi/Context';


const Testimonials = () => {
    const {TestimonaisJson} = useContext(Context);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
    };
  return (
    <div>
        <div className='container slider-container pt-5 pb-5 my-5 mb-5'>
                <Slider {...settings}>
                    {TestimonaisJson.map((data) =>
                        <div className='testi' key={data.id}>
                            <div className='row align-items-center'>
                                <div className='col-sm-4'>
                                    <img src={data.img} alt={data.name} />
                                </div>
                                <div className='col-sm-8 p-3'>
                                    <h3>{data.name}</h3>
                                    <h5>{data.Role}</h5>
                                </div>
                            </div>
                            <div className='row pt-3'>
                                <p>{data.About}</p>
                            </div>
                        </div>
                    )}
                </Slider>
            </div>
    </div>
  )
}

export default Testimonials;