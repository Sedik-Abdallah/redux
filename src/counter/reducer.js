//*       creation Reducer
const initialeState = {num:0}
const reducer = (state = initialeState, action) => {
    switch(action.type) {
        case 'Incrementer':
            return {...state, num:state.num+1}
        case 'Decrementer':
            return {...state, num:state.num-1}
        case 'Reset':
            return {...state, num:0}
        default:
            return state
    }
}
export default reducer






