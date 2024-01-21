export function adduser(user){
    return {type:'Add-user',payload:user}
}
export function deleteuser(id){
    return {type:'Delete-user',payload:id}
}
export function updateuser(user){
    return {type:'Update-user',payload:user}
}
export function filteruser(idville){
    return {type:'Filter-user',payload:idville}
}
export function clearfilter(){
    return {type:'Clear-user'}
}
export const deletall =()=>{
    return {type:"Delete-all"}
}
export const searchuser = (input) => {
    return {type:"Search-user", payload:input}
}