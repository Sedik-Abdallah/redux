import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTast,updateTask,addTask,deleteAll } from './reducer';

const App = () => {
    const tasks=useSelector(state=>state.tasks)
    const Numbertasks=tasks.length;
    const dispatch =useDispatch()

    const [inputMessga,setInputMessage]=useState('')
    const id=useRef();
    const Titre=useRef();
    const Name=useRef();
    const desc=useRef();

    function clear(){
        setInputMessage('')
    }

//* Add Task
    function AddInput(){
        setInputMessage(
            <div>
                <h2 >Add Task: </h2>
                <input type="Number" ref={id} placeholder='id....' />
                <input type="text" ref={Titre} placeholder='Titre....'/>
                <input type="text" ref={Name} placeholder='Name....'/>
                <input type="text" ref={desc} placeholder='Descreption....'/>
                <button onClick={AddTask}>Add</button> <button onClick={clear}>cancel</button>
            </div>
        )
    }
    function AddTask(){
        dispatch(addTask(
            {
                id:id.current.value,
                titre:Titre.current.value,
                name:Name.current.value,
                desc:desc.current.value
            }
        ))
        setInputMessage('')
    }    

//* update task
    function updateTaskk(N){
        const task = tasks.find((u)=>u.id===parseInt(N))
        setInputMessage(
            <div>
                <h2 >update Task: <span >{task.id}</span> </h2>
                <input type="text" ref={Titre} defaultValue={task.titre} placeholder='Titre....'/>
                <input type="text" ref={Name} defaultValue={task.name} placeholder='Name....'/>
                <input type="text" ref={desc} defaultValue={task.desc} placeholder='Descreption....'/>
                <button onClick={()=>Updatedata(task.id)}>Add</button> <button onClick={clear}>cancel</button>
            </div>
        )
    }    

    function Updatedata(k){
        dispatch(updateTask(
            {
                id:k,
                titre:Titre.current.value,
                name:Name.current.value,
                desc:desc.current.value
            }
        ))
    }


//* delete task
    function deleteT (T){
        const task = tasks.find((u)=>u.id===T)
        const confirmation=window.confirm(`...deleting task N° ${T} `)
        if (confirmation){dispatch(deleteTast(T)) }
    }

//* delete all
    function deleteAlll(){
        dispatch(deleteAll())
    }
    return (
        <div className=''>
            <h1>Gestion des tasks</h1>
            <button onClick={()=>AddInput()}>Add Task</button>
            {inputMessga}
            {Numbertasks !==0  ? 
            <table  border={1}>
            <thead>
                    <tr>
                        <td>id</td>
                        <td>titre</td>
                        <td>descreption</td>
                        <td colSpan={2}>Action <button style={{marginLeft: "57.5px",}} onClick={()=>deleteAlll()} >Delete All </button></td>
                    </tr>
                </thead>
                <tbody>
                        {tasks.map((t,index)=>(
                            <tr key={index}>
                                <td>{t.id} </td>
                                <td>{t.titre} </td>
                                <td>{t.name}</td>
                                <td>{t.desc}</td>
                                <td>
                                <button onClick={()=>updateTaskk(t.id)}>Update</button>
                                <button onClick={()=>deleteT(t.id)}>Delete</button>
                                </td>

                            </tr>

                        ))}
                </tbody>
            </table> :<h1 style={{textAlign:'center',color:'red',fontWeight:'lighter',border:' groove',borderRadius: '7px' ,}}>Nothing to show </h1>}
            
        </div>
    );
}

export default App;
