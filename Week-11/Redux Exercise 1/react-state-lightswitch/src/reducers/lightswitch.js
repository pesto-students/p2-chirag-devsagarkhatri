const lightswitchReducer=(state={isLightOn:true},action)=>{
    if(action.type=="TOGGLE"){
      return state.isLightOn?false:true;
    }
    return state;
  }

export default lightswitchReducer;