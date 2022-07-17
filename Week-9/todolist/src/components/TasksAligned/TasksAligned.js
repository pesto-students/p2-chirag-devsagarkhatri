import React from 'react';
import img from './../../assets/images/notasks.png';
import './TasksAligned.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
let TasksAligned=(props,detail)=>{
    let taskList = props.taskList;
    let draw=(taskList)=>{
        return(taskList.map(function(task,count){
            return(
                <div className="row mx-0 p-2" key={count}>
                    {console.log(taskList)}
                    <div className="input-group m-0 mb-2">                
                        <div className="input-group-prepend" style={{height:"100%"}}>
                            <div onClick={(event)=>props.handleComplete(task.id)} className={(task.isImportant)?"input-group-text border border-danger":"input-group-text border border-primary"} style={{height:"100%"}}>
                                ✔️
                            </div>
                        </div>

                        <input type="text" className={(task.isImportant)?"border-danger form-control border bg-light":"border-primary form-control border bg-light"} id="inlineFormInputGroup" value={task.description} disabled/>
                    </div>
                </div>                            
            );
        }));
    }

    let noTask=()=>{
        return (
            <div className='mx-0 p-2'>
                <center>
                <img src={img} width={"auto"} height={"250px"} />
                <br/>"Your have no assigned Tasks"
                </center>
            </div>
            
        );
    }
    return ( 
        <div className="rounded p-0 mx-2 ">
            <div className="d-flex bg-warning p-2 rounded justify-content-center">
                <h4>{taskList && taskList.length>0?taskList.length+' ':''}Tasks Aligned</h4>
            </div>
            <div className="d-flex flex-column p-3 rounded taskLinearBg">
                {   
                    taskList && taskList.length>0?draw(taskList):noTask()                    
                }
            </div>
            
        </div>
     );
}

export default TasksAligned; 