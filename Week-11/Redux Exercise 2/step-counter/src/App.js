import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { reset, increment } from "./redux/actions/index.js";
import './../node_modules/bootstrap/dist/css/bootstrap.css';


function App() {
  const counter = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="justify-content-center row">
      <div className="d-flex flex-column m-5 p-5 col-4 bg-warning rounded" style={{margin:"50%"}}>
        {console.log(counter)}
        <h3>
          You have walked {counter} steps today!
        </h3><br />
        <button className='btn btn-success' onClick={() => dispatch(increment())}>Add a Step</button><br />
        <button className='btn btn-danger' onClick={() => dispatch(reset())}>Reset Steps</button>
      </div>
    </div>
  );
}

export default App;
