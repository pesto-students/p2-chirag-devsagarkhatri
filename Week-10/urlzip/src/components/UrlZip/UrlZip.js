import React, { useState } from 'react';
import About from '../About/About';
import Documentation from '../Documentation/Documentation';
import Header from '../Header/Header';
import Home from '../Home/Home';
import './../../../node_modules/bootstrap/dist/css/bootstrap.css';


const UrlZip=()=>{
    let [index,setIndex] = useState('1');
    return ( 
        <>            
            <Header 
                index={index}
                setIndex = {setIndex}
            />
            
            {
                index==='1'?<Home/>:''
            }
            {
                index==='2'?<About/>:''
            }
            {
                index==='3'?<Documentation/>:''
            }
        </>
     );
}

export default UrlZip;
