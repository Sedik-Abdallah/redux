import { useEffect } from "react"

export const UserTitle=(T)=>{
    useEffect(()=>
    {
        document.title={T}
    },[T])
    return null;
}