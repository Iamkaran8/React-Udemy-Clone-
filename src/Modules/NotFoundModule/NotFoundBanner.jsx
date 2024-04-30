import React from 'react';
import '../Styles/notfound.css';
import error from '../Services/Assets/error.jpg';
import { Link } from 'react-router-dom';

const NotFoundBanner = () => {
  return (
    <div>
        <div className='text-center notfound'>
                <img
                    src={error}
                    alt="not found"
                />
                <h1>We can’t find the page<br></br> you’re looking for</h1>
                <p>Visit our <Link to='/'>support</Link> page for further assistance.</p>
            </div>
    </div>
  )
}

export default NotFoundBanner;