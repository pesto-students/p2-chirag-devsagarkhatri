import React, { useEffect, useState } from 'react'
import TasksAligned from '../TasksAligned/TasksAligned';
import TasksCompleted from '../TasksCompleted/TasksCompleted';
import './../../../node_modules/bootstrap/dist/css/bootstrap.css';


let Tasks=(props)=>{
    let taskList = props.taskList;
    let [alignedTasks,setAlignedTasks] = useState();
    let [completedTasks,setCompletedTasks] = useState();

    const handleComplete=(id)=>{
        let ts = [...taskList];
        let it = ts.find(item=>item.id===id);

        it.isComplete = true;
        ts = ts.filter(item=>item.id!==id);

        ts.push(it);
        props.setTaskList(ts);
    }

    const handleDelete=(id)=>{
        let ts = [...taskList];
        let it = ts.find(item=>item.id===id);

        ts = ts.filter(item=>item.id!==id);
        
        props.setTaskList(ts);
    }

    useEffect(()=>{
        setAlignedTasks(taskList.sort((a,b)=>Number(b.isImportant)-Number(a.isImportant)).filter((task)=>{
            return task.isComplete===false;
        }));

        setCompletedTasks(taskList.filter((task)=>{
            return task.isComplete===true;
        }));
    },[taskList]);
    return ( 
        <div className="row">
            <div className="col">
                <TasksAligned taskList={alignedTasks} handleComplete={handleComplete}/>
            </div>
            <div className="col">
                <TasksCompleted taskList={completedTasks} handleDelete={handleDelete}/>
            </div>
        </div> 
    );
}

export default Tasks;