import { createSlice } from '@reduxjs/toolkit'

const allcart=createSlice(

    {
        name:'allcart',
        initialState:{
            cart:[],
            total:0
        },
        reducers:{
            addproduit(state,action)
            {
                const total=state.total+action.payload.price
                const addproduit=[...state.cart,action.payload]
                return {...state,cart:addproduit,total:total}
            },
            deleteproduit(state,action)
            {
                const deletedproduit=state.cart.filter(P=>P.id!==parseInt(action.payload.id))
                let somme= deletedproduit.reduce((som,n)=>{som +=Number(n.price); return som},0)
                return {...state,cart:deletedproduit,total:somme}
            }
        }
    }
    )
//specify actions and reducers 
export const {addproduit,deleteproduit}=allcart.actions
export const cartReducer=allcart.reducer