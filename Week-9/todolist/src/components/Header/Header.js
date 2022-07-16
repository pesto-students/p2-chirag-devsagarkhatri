import React from 'react';
import logo from './../../assets/images/logo.png';
import './../../../node_modules/bootstrap/dist/css/bootstrap.css';

let Header=()=> {
    return ( 
        <nav className="navbar navbar-dark bg-light">
            <span className="navbar-brand container-fluid" >
                <img src={logo} width="auto" height="30" alt=""/>
            </span>
        </nav>
     );
}

export default Header;