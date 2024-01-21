export function addStg(newstg){
    return{type:'Add',payload:newstg}
}
export const updateStg = (newstg) => {
    return {type:"Update", payload:newstg}
}
export const deleteStg = (id) => {
    return {type:"Delete", payload:id}
}
export const deletall =()=>{
    return {type:"Delete-all"}
}
export const searchstg = (input) => {
    return {type:"Search-stg", payload:input}
}
