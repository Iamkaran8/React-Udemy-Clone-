import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { FireBaseLogin } from '../Services/AccountServices/FireBase';
import { StoreUserData } from '../Services/AccountServices/Storage';
import { isAuthenticated } from '../Services/AccountServices/Auth';

const Login = () => {
    // setting initial valus for errors
    const iniitialLoginError = {
        email: { required: false },
        password: { required: false },
        custom_error: null
    }
    // State for errors
    const [error, setError] = useState(iniitialLoginError);

    // state for loading 
    const [loading, setLoading] = useState(false)


    // state for inputs
    const [input, setInput] = useState(
        {
            email: '',
            password: ''
        }
    )


    // funtion for on submit event
    const handleSubmit = (event) => {
        event.preventDefault();
        let error = iniitialLoginError;
        let hasError = false;
        if (input.email === "") {
            error.email.required = true;
            hasError = true;
        }
        if (input.password === "") {
            error.password.required = true;
            hasError = true;
        }
        if (hasError !== true) {
            setLoading(true)
            FireBaseLogin(input).then((response) => {
                StoreUserData(response.data.idToken)
            }).catch((err) => {
                console.log("error", err)
                if (err.response.data.error.message === "INVALID_LOGIN_CREDENTIALS") {
                    setError({ ...error, custom_error: "Invalid Credentials" })
                }
            }).finally(() => {
                setLoading(false)
            })
        }
        setError({ ...error })
    }



    if (isAuthenticated()) {
        return <Navigate to="/" />
    }


    // function for handling inputs
    const handleInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }


    return (
        <>
            <div className='container'>
                <div className='row p-5'>
                    <div className='col-md-4'></div>

                    <div className='col-md-4 text-center'>
                    <h6 className='Sign-heading py-3 text-start'>Log in to your Udemy account</h6>

                        <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <input type="email" name="email" onChange={handleInput} placeholder='Enter your Userid' className='my-1 py-3' />
                            <br></br>
                            {error.email.required ? (<span className='text-danger'>*UserId is Required</span>) : null}
                        </div>
                        <div className='form-group'>
                            <input type="password" name="password" onChange={handleInput} placeholder='Enter your password' className='my-1 py-3' />
                            <br></br>
                            {error.password.required ? (<span className="text-danger" > *Password is required</span>) : null}
                            </div>
                            {error.custom_error ? (<p className='text-danger'>{error.custom_error}</p>) : null}
                            {loading ? (<div className="spinner-border text-primary m-2" role="status">
                                <span className="sr-only"></span>
                            </div>) : null}
                            <br></br>
                            <button className='btn btn-indigo my-2' disabled={loading}>Login Here</button>
                        </form>
                        <div className="form-group">
                            Create new account ? Please <Link to="/sign-up" className='link-color'>Register</Link>
                        </div>
                    </div>

                    <div className='col-md-4'></div>
                </div>
            </div>
        </>
    )
}

export default Login