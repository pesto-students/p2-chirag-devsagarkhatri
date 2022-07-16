import React from 'react';
import logo from './../../assets/images/logo1.png';
import './../../../node_modules/bootstrap/dist/css/bootstrap.css';


const Header=(props)=>{
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-primary bg-gradient">
            <div className="container justify-content-between">
                <div className="navbar-brand pl-3 col" href="#">
                    <img src={logo} width="auto" height="40" alt=""/>
                </div>

                <div className="collapse navbar-collapse col" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <div className={props.index==='1'?'nav-link active':'nav-link'} onClick={()=>props.setIndex('1')}>Home</div>
                        <div className={props.index==='2'?'nav-link active':'nav-link'} onClick={()=>props.setIndex('2')}>About</div>
                        <div className={props.index==='3'?'nav-link active':'nav-link'} onClick={()=>props.setIndex('3')}>Documentation</div>
                    </div>
                </div>
            </div>
        </nav>
     );
}

export default Header;
