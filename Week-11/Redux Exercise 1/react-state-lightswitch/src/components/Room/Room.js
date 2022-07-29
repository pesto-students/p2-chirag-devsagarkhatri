//**

import React, { Component } from 'react';
import {connect} from 'react-redux';
import { TOGGLE } from '../../actions/lightswitch';
import './Room.css';


const flipLight = () => {
    console.log("fliplight Called");
    return {type:"TOGGLE"};
  
};

//callback to connect fn of "redux-react"
const mapStateToProps = (state) => {
    return {
      isLightOn : !state.isLightOn
    };
  };
  
  const mapDispatchToProps = {
    TOGGLE
  };

class Room extends Component {  
    
    
    render() {
      const lightedness = this.props.isLightOn ? "lit" : "dark";
      
  
      return (
        <div className={`room ${lightedness}`}>
          the room is {lightedness}
          <br />
          <button onClick={()=>{
              flipLight()
            }}>flip</button>
        </div>
      );
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps )(Room);
  