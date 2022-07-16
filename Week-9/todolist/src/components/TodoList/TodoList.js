import React, { useState } from 'react'
import Header from './../Header/Header';
import AddTask from './../AddTask/AddTask';
import Tasks from './../Tasks/Tasks';

import './../../../node_modules/bootstrap/dist/css/bootstrap.css';

const TodoList=()=>{
    document.title='To-Do-List App';
    let [taskList,setTaskList] = useState([
        {id:1,description:"This task is importsnt",isImportant:true,isComplete:false},
        {id:2,description:"This is a normal priority task",isImportant:false,isComplete:false},
        {id:3,description:"This task is complete",isImportant:false,isComplete:true}
      ]);
    
    const addToList=(description,isImportant)=>{
        console.log(description);
        console.log(isImportant);
        if(description!==''){
            let temp = [...taskList];
            let len = taskList.length;

            temp.push({
                id:len+1,
                description:description,
                isImportant:isImportant,
                isComplete:false
            });
            console.log(temp);
            setTaskList(temp);
        }    
    }   

    return ( 
        <div className="App">
            <Header/>
            <div className="container mt-4">
                <AddTask addToList={addToList}/>
                <Tasks taskList={taskList} setTaskList={setTaskList}/>
            </div>
            <div className='footer container mt-4'>
                <hr/>
                Press ✔️ to mark the task as completed.<br/>
                Press 🗑️ to delete the completed task. <hr/>
            </div>
        </div>
     );
}

export default TodoList;