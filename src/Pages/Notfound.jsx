import React from 'react'
import NotFoundBanner from '../Modules/NotFoundModule/NotFoundBanner'
import Footer from '../Modules/Components/Footer'
import Layer from '../Modules/NotFoundModule/Layer'
import Header from '../Modules/Components/Header'

const Notfound = () => {
  return (
    <div>
      <Header/>
        <NotFoundBanner></NotFoundBanner>
        <Layer></Layer>
        <Footer></Footer>
    </div>
  )
}

export default Notfound