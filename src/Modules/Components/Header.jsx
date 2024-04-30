import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Services/Assets/logo-udemy.svg';
import cart from '../Services/Assets/cart.svg';
import globe from '../Services/Assets/globe.svg';
import { Context } from '../Services/ContextApi/Context';
import userprofile from  '../Services/Assets/userprofile.jpg'
import { isAuthenticated } from '../Services/AccountServices/Auth';
import Search from '../Serach/Search';




const Header = () => {
    const { customer } = useContext(Context);
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-white">
            <div className="container">
                <Link className="navbar-brand" to="/"><img src={logo} alt="Udemy" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className='my-3'>
                            <form className="d-flex">
                                <Search/>
                                {/* <button className="btn btn-submit" type="submit">Search</button> */}
                            </form>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item text-center my-2">
                            <Link className="nav-link" aria-current="page" to="#" >Udemy Bussiness</Link>
                        </li>
                        <li className="nav-item text-center my-2">
                            <Link className="nav-link" aria-current="page" to="#">Teach on Udemy</Link>
                        </li>
                        <li className="nav-item text-center my-2">
                            <Link className="nav-link cart" aria-current="page" to="/cart"><img src={cart} alt="globe" /><span className='cart-count'>{customer.length}</span></Link>
                        </li>
                        {!isAuthenticated() ? (<li className="nav-item text-center my-2">
                            <Link className="nav-link btn btn-log"  to='/login' >Log in</Link>
                        </li>) : null}
                        {!isAuthenticated() ? 
                        (<li className="nav-item text-center"><Link className="nav-link btn btn-sign my-2"  to='/sign-up'>Sign up</Link></li>) : 
                        (<li className="nav-item text-center"><Link className="nav-link Userimg"  to='/dashboard'><img src={userprofile} alt="User profile" /></Link></li>)
                        }
                        <li className="nav-item text-center">
                            <Link className="nav-link btn btn-log my-2"  to='#' ><img src={globe} alt="globe" /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header