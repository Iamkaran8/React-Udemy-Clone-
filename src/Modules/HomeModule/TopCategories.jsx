import React, { useContext } from 'react';
import '../Styles/home.css';
import { Context } from '../Services/ContextApi/Context';
import { Fade, Slide } from 'react-awesome-reveal';


const TopCategories = () => {
    const {Features} = useContext(Context)
  return (
    <div>
        
        <section className='top-categories container'>
          <Slide direction='left'>
                <h2>Discover Top Categories</h2>
                </Slide>
                <div className='row categories-row mb-4'>
                    {Features.map((data) => <div key={data.id} className='col categories d-flex flex-column align-items-center'>
                       <Fade>
                       <img src={data.img} alt={data.name} />
                       </Fade>
                        <h4 className='pt-3 text-center'>{data.name}</h4>
                    </div>)}
                </div>
            </section>
    </div>
  )
}

export default TopCategories