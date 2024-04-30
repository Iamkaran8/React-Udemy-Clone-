import React from 'react';
import '../Styles/sign.css'
import { useState } from 'react'
import { FireBaseRegister } from '../Services/AccountServices/FireBase';
import { StoreUserData } from '../Services/AccountServices/Storage';
import { isAuthenticated } from '../Services/AccountServices/Auth';
import { Link, Navigate } from 'react-router-dom';


const SignupCreds = () => {
    // initial state of validation message
    const initialErrorState = {
        name: { required: false },
        email: { required: false },
        password: { required: false },
        custom_error: null
    }

    // state for valdation msg
    const [errors, setErrorrs] = useState(initialErrorState)


    // state to handle the loading
    const [loading, setLoading] = useState(false);

    // state to handle inputs
    const [input, setInput] = useState({
        name: '',
        email: '',
        password: ''
    })

    // function for handling submit event
    const SubmitEvent = (event) => {
        console.log(input)
        event.preventDefault();
        let errors = initialErrorState;
        let hasError = false;
        if (input.name === '') {
            errors.name.required = true
            hasError = true;
        }
        if (input.email === '') {
            errors.email.required = true
            hasError = true;
        }
        if (input.password === '') {
            errors.password.required = true;
            hasError = true
        }

        if (hasError !== true) {
            setLoading(true)
            FireBaseRegister(input).then((response) => {
                StoreUserData(response.data.idToken)
            }).catch((err) => {
                console.log("error", err)
                if (err.response.data.error.message === "EMAIL_EXISTS") {
                    setErrorrs({ ...errors, custom_error: "Already this email has been Registered" })
                }
                else if (String(err.response.data.error.message).includes('WEAK_PASSWORD')) {
                    setErrorrs({ ...errors, custom_error: "Password should be at least 6 characters" })
                }
            }).finally(() => {
                setLoading(false)
            })
        }
        setErrorrs({ ...errors })
    }


    // function for handling inputs
    const handleInput = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }


    if (isAuthenticated()) {
        return <Navigate to="/login" />
    }


    return (
        <>
            <div className='container'>
                <div className='row justify-content-center align-items-center p-5'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4 text-center'>
                        <h6 className='Sign-heading py-3 text-start'>Sign up and start learning</h6>
                        <form onSubmit={SubmitEvent}>
                            <div className='form-group'>
                                <input type='text' className='my-1 py-3' name='name' onChange={handleInput} placeholder='Name' />
                                <br></br>
                                {errors.name.required ? (<span className='text-danger'>Name field is required</span>) : null}
                            </div>
                            <div className='form-group'>
                                <input type="email" className='my-1 py-3' name="email" onChange={handleInput} placeholder="Email" />
                                <br></br>
                                {errors.email.required ? (<span className='text-danger'>Email is required</span>) : null}
                            </div>
                            <div className='form-group'>
                                <input type="password" className='my-1 py-3' name="password" onChange={handleInput} placeholder='Password' />
                                <br></br>
                                {errors.password.required ? (<span className='text-danger'>Password is required</span>) : null}
                            </div>
                            {errors.custom_error ? (<p className='text-warning'>{errors.custom_error}</p>) : null}
                            <br></br>
                            {loading ? (<div class="spinner-border text-warning" role="status">
                                <span class="sr-only"></span>
                            </div>) : null}
                            <button className='btn btn-indigo' disabled={loading}>Regiter</button>
                            <div class="form-group text-center py-2">Already have account ? Please <Link to="/login" className='link-color'>Login</Link></div>
                        </form>
                    </div>
                    <div className='col-md-4'></div>
                </div>
            </div>
        </>
    )
}

export default SignupCreds;