import React, { useContext } from 'react';
import '../Styles/home.css';
import { Context } from '../Services/ContextApi/Context';


const ByTheNumbers = () => {
    const {Counter} = useContext(Context)
  return (
    <div>
         <section className='counter-sec pb-5 pt-5'>
                <div className='container'>
                    <div className='row counter justify-content-between pt-3 pb-3'>
                        {Counter.map((data) =>
                            <div className='col-sm-2' key={data.id}>
                                <h2 className='text-center'>{data.num}</h2>
                                <p className='text-center'>{data.name}</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
    </div>
  )
}

export default ByTheNumbers