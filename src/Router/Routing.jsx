import Home from '../Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notfound from "../Pages/Notfound";
import CourseDetails from "../Pages/CourseDetails";
import Mycart from "../Pages/Mycart";
import Signup from "../Pages/Signup";
import Log from "../Pages/Log";
import DashBoard from '../Pages/DashBoard';

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route exact path='/cart' element={<Mycart />}></Route>
                <Route exact path='/:id' element={<CourseDetails />}></Route>
                <Route exact path='/sign-up' element={<Signup />}></Route>
                <Route exact path='/login' element={<Log />}></Route>
                <Route exact path='/dashboard' element={<DashBoard/>}></Route>
                <Route exact path='*' element={<Notfound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}


export default Routing;