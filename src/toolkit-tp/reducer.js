import {createSlice} from '@reduxjs/toolkit';
const taskslice=createSlice (
    {
        name:'tasks',
        initialState:{
            tasks:[
                {
                    id:1,titre:'titre task 1',name:'task1',desc:'test'
                },
                {
                    id:2,titre:'titre task 2',name:'task2',desc:'@@@@'
                }
            ],
        },
        reducers:{
            addTask(state,action){
                const newTask = [...state.tasks,action.payload] 
                return{ ...state,tasks:newTask}
            },
            updateTask(state,action){
                const temp = state.tasks.filter(task => task.id !== parseInt( action.payload.id))
                return {...state , tasks:[...temp,action.payload]}
            },
            deleteTast(state,action){
                const temp = state.tasks.filter(task => task.id !==action.payload)
                return {...state, tasks:temp}
 
            },
            deleteAll(state){
                return {...state,tasks:[]}
            }
        }
    }
)
export const {addTask,updateTask,deleteTast,deleteAll} =taskslice.actions;
export const taskReducer = taskslice.reducer;