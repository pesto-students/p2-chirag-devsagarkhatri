import React from 'react';
// import { TOGGLE } from './actions/lightswitch';
import { connect } from "react-redux";
// import Room from './components/Room/Room';
import './App.css';
import './components/Room/Room.css';

const TOGGLE = ()=>{
  return {
      type:"TOGGLE",
  };
}


const flipLight = () => {
  console.log("fliplight Called");
  return { type: "TOGGLE" };

};



class Room1 extends React.Component {  
  render() {
    const lightedness = this.props.isLightOn ? "lit" : "dark";
    const {dispatch} = this.props;
    return (
      <div className={`room ${lightedness}`}>
        the room is {lightedness}
        <br />
        <button onClick={()=>{
            dispatch(flipLight());
          }}>flip</button>
      </div>
    );
  }
}

function App() {
  return (
      <Room1/>
  );
}

//callback to connect fn of "redux-react"
const mapStateToProps = (state) => {
  return {
    isLightOn :  !state.isLightOn
  };
};

const mapDispatchToProps = {
  TOGGLE
};


const connectedRoom=connect(mapStateToProps)(Room1);

export default connectedRoom;
// export default App;