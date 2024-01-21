import { createSlice } from '@reduxjs/toolkit'

const stgSlice=createSlice(

    {
        name:'abdallah',
        initialState:{
            stgrs:[
                {num:100,nom:'abdallah',filiere:'dev'}, {num:200,nom:'aymen',filiere:'dev'}
            ]
        },
        reducers:{
            addStg(state,action)
            {
                // const addStg=state.stgrs.concat(action.payload)
                const addStg=[...state.stgrs,action.payload]
                return {...state,stgrs:addStg}
            },
            deleteStg(state,action)
            {
                const deletedStg=state.stgrs.filter(stg=>stg.num!==parseInt(action.payload.num))
                return {...state,stgrs:deletedStg}
            }
        }
    }
    )
//specify actions and reducers 
export const {addStg,deleteStg}=stgSlice.actions
export const stgReducer=stgSlice.reducer