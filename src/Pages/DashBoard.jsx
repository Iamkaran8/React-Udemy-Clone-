import React from 'react'
import Header from '../Modules/Components/Header'
import { isAuthenticated } from '../Modules/Services/AccountServices/Auth'
import { Navigate } from 'react-router-dom'
import Footer from '../Modules/Components/Footer'


const DashBoard = () => {
    
    if(!isAuthenticated()){
       return <Navigate to='/' />
    }
    return (
        <>
            <Header />
            <h2 style={{marginTop:"20px"}} className='text-center'>DashBoard</h2>
            <Footer/>
        </>
    )
}

export default DashBoard