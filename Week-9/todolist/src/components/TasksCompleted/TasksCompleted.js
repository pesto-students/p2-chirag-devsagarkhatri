import React from 'react';
import img from './../../assets/images/notaskscomplete.png';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './TasksCompleted.css';

let TasksCompleted=(props)=>{
    let taskList = props.taskList;

    let draw=(taskList)=>{
        return(
            taskList.map(function(task,count){
                return(
                    <div className="row mx-0 p-2" key={count}>
                        <div className="input-group m-0 mb-2">                
                        <input type="text" className="form-control border border-success bg-light" id="inlineFormInputGroup" value={task.description} disabled/>                                    
                            <div className="input-group-prepend" style={{height:"100%"}}>
                                <div onClick={(event)=>props.handleDelete(task.id)}  className="input-group-text border border-success" style={{height:"100%"}}>
                                🗑️
                                </div>
                            </div>

                            
                        </div>
                    </div>                            
                );
            })
        );
    }

    let noTask=()=>{
        return (
            <div className='mx-0 p-2'>
                <center>
                <img src={img} width={"auto"} height={"250px"} />
                <br/>"Your have no completed tasks"
                </center>
            </div>
            
        );
    }
    return ( 
        <div className="rounded p-0 mx-2 ">
            <div className="d-flex bg-info p-2 rounded justify-content-center">
                <h4>Tasks Completed</h4>
            </div>
            <div className="d-flex flex-column p-3 rounded taskCompletedLinearBg">
                {
                    taskList && taskList.length>0?draw(taskList):noTask()                    
                }
            </div>
            
        </div>
     );
}

export default TasksCompleted;