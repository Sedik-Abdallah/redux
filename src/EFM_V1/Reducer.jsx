const initialState ={
    ListeSimulation:[
        {
            
        }
    ]
}

const reducer =(state=initialState,action)=>{

    switch(action.type){
        case 'Add':
         return {...state,ListeSimulation:[...state.ListeSimulation,action.payload]}
        case "Delete":
            const car = state.ListeSimulation.find((V)=>V.marque===action.payload)
            if (car) {
                car.montant= ''
            }
    }
}
export default reducer;