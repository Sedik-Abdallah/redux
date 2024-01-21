const initialState = {
    stgs:[ 
        { id: 1, name: "Abdallah",prenom:'Sedik',ville:'Casa', code_postal:40000,note: "9.9"  }, 
        { id: 2, name: "Aymen",prenom:'Benbouhia',ville:'Rabat', code_postal:200000,note: "16.9"  },
        { id: 3, name: "Saad",prenom:'Ksioui',ville:'Fes', code_postal:234444,note: "10.9"   }, 
        { id: 4, name: "Boumahdi",prenom:'Mouaddab',ville:'casa', code_postal:40000,note: "8.9"   }, 
    ]
}

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
                stg.ville = action.payload.ville
                stg.code_postal = action.payload.code_postal
                stg.note = action.payload.note
            }
            return state
        case "Delete":
            return {...state, stgs:[...state.stgs.filter((u)=>u.id!==parseInt(action.payload))]}
        case 'Delete-all':
            return {...state,stgs:[]}
        case 'Search-stg':
            return {...state,stgs:[state.stgs.find(s=>s.name && s.ville===action.payload)]}
        default:
            return state
    }
}
export default stgreducer