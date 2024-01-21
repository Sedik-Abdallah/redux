import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addStg } from './reducer';
import { useNavigate } from 'react-router-dom';
const AddStg = () => {
    const dispatch=useDispatch()
    const fils=['Dev','Res','Ges','Com']
    const numRef=useRef()
    const nomRef=useRef()
    const filiereRef=useRef()
    const navigate=useNavigate()
    function Addstgg(){
        let stg={
            num:parseInt(numRef.current.value),
            nom:nomRef.current.value,
            filiere:filiereRef.current.value
        }
        dispatch(addStg(stg))
        navigate('/')
    }
    return (
        <div>
            <h1>Add stagiaire :</h1>
            <hr />
            <input ref={numRef} type="Number" min={0} defaultValue={0} step={100} placeholder='taper numero.....' />
            <input ref={nomRef} type="text" placeholder='taper nom.....' />
            <select ref={filiereRef}>
                {fils.map(fil=>(
                    <option value={fil}> {fil}</option>
                ))}
            </select>
            <button onClick={()=>Addstgg()}>add</button>
        </div>
    );
}

export default AddStg;
