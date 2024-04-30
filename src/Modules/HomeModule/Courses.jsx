import React, { useContext } from 'react';
import { Context } from '../Services/ContextApi/Context';
import { Link } from 'react-router-dom';
import star from '../Services/Assets/star.jpg'
import '../Styles/course.css'
import { Slide, Zoom } from 'react-awesome-reveal';


const Courses = () => {
    const{post} = useContext(Context);
    const Courses =post.slice(0, 8);

  return (
    <div>
        <div className='container my-5'>
            <Slide direction='left'>
                <h1 className='course-title'>Top Categories</h1>
                </Slide>
            <div className='row'>
            {Courses.map((data) =>
                    <div key={data.id}  className='col-lg-3 col-md-6 p-2 mt-3'>
                        <Zoom cascade>
                        <div className="card">
                            <img src={data.banner} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h6 className="card-title">{data.title.substring(0,35)}..</h6>
                                <p className="card-text">{data.description1.substring(0,60)}..</p>
                                <small>{data.students}</small>
                                <br></br>
                                <img src={star} alt="star" className='mb-3' />
                                <p className='price'>{data.price} - <small className='mrp'>{data.mrp}</small></p>
                                <Link to={`/${data.id}`} className="btn btn-Enquiry">Learn More</Link>
                            </div>
                        </div>
                        </Zoom>
                    </div>
            )}
             </div>
             </div>
    </div>
  )
}

export default Courses;