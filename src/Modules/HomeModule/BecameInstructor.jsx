import React from 'react';
import '../Styles/home.css';
import '../Styles/routing.css';
import instructor from '../Services/Assets/instructor.jpg';
import { JackInTheBox } from "react-awesome-reveal";



const BecameInstructor = () => {
  return (
    <div>
        <section className='instructor container mt-5 pt-5 pb-5 mb-5'>
                <div className='row'>
                    <div className='col-sm-6 text-center'>
                      <JackInTheBox><img
                        src={instructor}
                        alt="instructor"
                    />
                    </JackInTheBox>
                    </div>
                    <div className='col-sm-6 align-self-center text-start ins-mb'>
                        <h3>Become an instructor</h3>
                        <p>Instructors from around the world teach millions of learners on Udemy. We provide the tools and skills to teach what you love.</p>
                        <button class="btn btn-sign m-0" type="submit" to='#'>Start Teaching Today!</button>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default BecameInstructor