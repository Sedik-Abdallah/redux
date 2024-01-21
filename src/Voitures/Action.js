export function addCar(newCar){
    return{type:'Add',payload:newCar}
}
export const updateCar = (newCar) => {
    return {type:"Update", payload:newCar}
}
export const deleteCar = (Marticule) => {
    return {type:"Delete", payload:Marticule}
}
export const searchCar = (input) => {
    return {type:"Search-Car", payload:input}
}
export const deletall =()=>{
    return {type:"Delete-all"}
}