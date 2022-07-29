const counterReducer = (state = {count:1}, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
            ...state,
            count:state.count + 1
        }
      case "RESET":
        return {
            ...state,
            count : 0
        }
      default:
        return state;
    }
  };
  export default counterReducer;