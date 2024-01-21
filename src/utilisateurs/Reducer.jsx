const initialState = {
    villes:[
        {id:1,nom:'casablanca'},
        {id:2,nom:'rabat'},
        {id:3,nom:'agadir'},
        {id:4,nom:'fes'}
    ],
    users:[
        {id:1,nom:'sedik',prenom:'abdallah',ville:1},
        {id:2,nom:'alaoui',prenom:'bs',ville:2},
        {id:3,nom:'aymen',prenom:'aymen',ville:1},
        {id:4,nom:'saad',prenom:'saad',ville:4}
    ]
};
const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'Add-user':
            return {...state,users:[...state.users,action.payload]}
        case 'Delete-user':
            const tab=state.users.filter(user=>user.id!==parseInt(action.payload))
            return {...state,users:tab}
        case 'Update-user':
            const temp =state.users.filter(user=>user.id!==parseInt(action.payload.id))
            return {...state,users:[...temp,action.payload]}
        case 'Filter-user':
            return {...state,filterusers:state.users.filter(user=>user.ville===parseInt(action.payload))}
        case 'Clear-user':
            return {...state,filterusers:null}
        case 'Search-user':
            return {...state,users:[state.users.find(s=>s.id===parseInt(action.payload))]}
        case 'Delete-all':
            return {...state,users:[]}
        default:
            return state
    }
}
export default userReducer;