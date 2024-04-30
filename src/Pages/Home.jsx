import React from 'react'
import Banner from '../Modules/HomeModule/Banner'
import Brands from '../Modules/HomeModule/Brands'
import TopCategories from '../Modules/HomeModule/TopCategories'
import BecameInstructor from '../Modules/HomeModule/BecameInstructor'
import ByTheNumbers from '../Modules/HomeModule/ByTheNumbers'
import Testimonials from '../Modules/HomeModule/Testimonials'
import Courses from '../Modules/HomeModule/Courses'
import Footer from '../Modules/Components/Footer'
import Header from '../Modules/Components/Header'



const Home = () => {
  return (
    <div>
      <Header />
      <Banner></Banner>
      <Brands></Brands>
      <Courses></Courses>
      <TopCategories></TopCategories>
      <BecameInstructor></BecameInstructor>
      <ByTheNumbers></ByTheNumbers>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  )
}

export default Home