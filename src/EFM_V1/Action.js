export function addCar(newCar){
    return{type:'Add',payload:newCar}
}
export const deleteCar = (marque) => {
    return {type:"Delete", payload:marque}
}