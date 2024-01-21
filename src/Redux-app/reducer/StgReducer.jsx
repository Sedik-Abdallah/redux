const initialState = {
    stgs:[ 
        { id: 1, name: "Abdallah",prenom:'Sedik',filiere:'TDI', note: "9.9"  }, 
        { id: 2, name: "Aymen",prenom:'Benbouhia',filiere:'TDI', note: "17" },
        { id: 3, name: "Saad",prenom:'Ksioui',filiere:'TDI', note: "-10"  }, 
        { id: 4, name: "Boumahdi",prenom:'Mouaddab',filiere:'TDI', note: "20"  }, 
    ]
};
const stgreducer = (state=initialState, action) => {
    switch(action.type) {
       case 'Add':
        return {...state,stgs:[...state.stgs,action.payload]}
        case "Update":
            const stg = state.stgs.find((s)=>s.id===parseInt(action.payload.id))
            if (stg) {
                stg.id = action.payload.id
                stg.name = action.payload.name
                stg.prenom = action.payload.prenom
                stg.filiere = action.payload.filiere
                stg.note = action.payload.note
            }
            return state
        case "Delete":
            return {...state, stgs:[...state.stgs.filter((u)=>u.id!==parseInt(action.payload))]}
        case 'Delete-all':
            return {...state,stgs:[]}
        case 'Search-stg':
            return {...state,stgs:[state.stgs.find(s=>s.id===parseInt(action.payload))]}
        default:
            return state
    }
}
export default stgreducer