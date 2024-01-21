const initialState = {
    voitures:[
        {Matricule:'6-A-6666',Marque:'peugeot',Modele:'peugeot 308 Active ',Date_circulation:'2020-10-02',Prix:'275.000'},
        {Matricule:'7-A-7777',Marque:'dacia',Modele:'dacia Logan',Date_circulation:'2021-02-08',Prix:'200.000'}
    ]
}


const Reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'Add':
        return {...state,voitures:[...state.voitures,action.payload]}
        case "Update":
            const car = state.voitures.find((V)=>V.Matricule===action.payload.Matricule)
            if (car) {
                car.Matricule = action.payload.Matricule
                car.Marque = action.payload.Marque
                car.Modele = action.payload.Modele
                car.Date_circulation = action.payload.Date_circulation
                car.Prix = action.payload.Prix
            }
            return state
        case "Delete":
            return {...state, voitures:[...state.voitures.filter((u)=>u.Matricule!==action.payload)]}
        case 'Search-Car':
            return {...state,Searchresultat:[state.voitures.find(s=>s.Matricule===action.payload)]}
        case 'Delete-all':
                return {...state,voitures:[]}
        default:
            return state
        
    }
}
export default Reducer;