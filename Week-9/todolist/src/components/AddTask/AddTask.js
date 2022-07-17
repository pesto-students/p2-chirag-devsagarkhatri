import React, { useState } from 'react';
import './../../../node_modules/bootstrap/dist/css/bootstrap.css';

let AddTask=(props)=>{
    let [desc,setDesc] = useState('');
    let [isImp,setImp] = useState(false);
    const addToList=()=>{
        console.log("isImp : "+ isImp);
        console.log("desc  : "+ desc);
        props.addToList(desc,isImp);
    }
    return ( 
        <form >
            <div className="row">            
                <div className="input-group m-0 mb-5">                
                    <div className="input-group-prepend" style={{height:"100%"}}>
                        <div className="input-group-text btn-outline-primary" style={{height:"100%"}}>
                            <input className="form form-check-input" type="checkbox" id="autoSizingCheck" onChange={(event)=>setImp(!isImp)}/> &nbsp; Important
                        </div>
                    </div>
                    
                    <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Describe your Task Details" onChange={(event)=>setDesc(event.target.value)}/>    
                    <div className="row btn btn-primary" onClick={()=>addToList()}>Add Task</div>
                </div>
            </div>
        </form>
     );
}

export default AddTask;