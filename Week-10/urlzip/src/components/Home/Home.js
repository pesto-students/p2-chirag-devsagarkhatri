import React from 'react';
import banner from './../../assets/images/banner.png';
import './../../../node_modules/bootstrap/dist/css/bootstrap.css';
import ShortnerComponent from '../ShortnerComponent/ShortnerComponent';

const Home=()=>{
    return ( 
        <div className="container ">
          <div className="row align-items-md-stretch mt-0 mb-5">
            <div className="p-5 mt-auto mb-auto  rounded-5 col-sm-6">
              <h1 className="display-6 fw-bold">More than just shorter Links </h1>
              <div className=" py-">
                Build your brands recognition and get detailed insights on how your links are performing.
              </div>
            </div>
            <div
              className="p-0 mt-auto mb-auto rounded-5 col-sm-6 "
              style={{ float: "left" }}
            >
              <img src={banner} className="svgImg" alt="main navlogo" style={{width:"100%"}}/>
            </div>
          </div>
          <br />
          <ShortnerComponent/>
        </div>
     );
}

export default Home;