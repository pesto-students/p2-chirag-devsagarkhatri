import { createStore } from "redux";
import lightswitchReducer from '../reducers/lightswitch'


const store = createStore(lightswitchReducer);
export default store;