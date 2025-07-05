import React from 'react'
import FrontPage from '../pages/FrontPage';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import DonatePage from "./../pages/DonatePage";
import JoinNow from "../pages/JoinNow";

const App = () => {
  return (
    <>
    {/* <FrontPage/> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FrontPage />}/>
        <Route path='/donate' element={<DonatePage />} />
        <Route path='/joinow' element={<JoinNow />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App