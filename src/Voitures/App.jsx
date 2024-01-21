import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addCar ,updateCar,deleteCar ,searchCar ,deletall} from './Action'
import './style.css'
const App = () => {
    const Voitures=useSelector(state=>state.voitures)
    const dispatch = useDispatch()

    
    const Matricule=useRef();
    const Marque =useRef()
    const Modele =useRef()
    const Date =useRef()
    const prix =useRef()
    const input =useRef()
    const [inputMessga,setInputMessage]=useState('')


    // * console.log(Searchresultat)
    const Searchresultat = useSelector(data=>data.Searchresultat);
    const allCars=Searchresultat ? Searchresultat : Voitures; 
    const Numberofcars=allCars.length;

//* Add a Car 
    function AddCar(){
        //todo clear inputs first without refreshing the page 
        //! clearInputs()
        setInputMessage(
           <>
            <h2 >Ajouter une voiture: </h2>
            <input type="text" ref={Matricule} placeholder='Matricule....' />
            <input type="text" ref={Marque} placeholder='Marque....'/>
            <input type="text" ref={Modele} placeholder='Modele....'/>
            <input type="date" ref={Date} placeholder='Date....'/>
            <input type="Number" ref={prix} placeholder='Prix....'/>
            <button onClick={Add}>Add</button> <button onClick={clear}>cancel</button>
           </>
        )
    }

    function Add(){
        dispatch(addCar({
             Matricule:Matricule.current.value,
             Marque:Marque.current.value,
              Modele:Modele.current.value,
              Date_circulation:Date.current.value,
               Prix:prix.current.value }))
        setInputMessage('')
        
    }
  
//* update a car

    function UpdateCarinput(N){
        const car = Voitures.find((u)=>u.Matricule===N)
        setInputMessage(
            <>
            <h2>Modifier Voiture : <span className='Matricule'>{car.Matricule}</span> </h2><br />
             <input type="text" ref={Marque} defaultValue={car.Marque} placeholder='Marque....'/>
             <input type="text" ref={Modele} defaultValue={car.Modele} placeholder='Modele....'/>
             <input type="date" ref={Date} defaultValue={car.Date_circulation} placeholder='Date....'/>
             <input type="Number" ref={prix} defaultValue={car.Prix} placeholder='Prix....'/>
             <button onClick={()=>Updatedata(car.Matricule)}>update</button>
             <button onClick={clear}>cancel</button>
            </>
         )
    }
    function Updatedata(k){
        dispatch(updateCar({ Matricule:k,
            Marque:Marque.current.value,
             Modele:Modele.current.value,
             Date_circulation:Date.current.value,
              Prix:prix.current.value  }))
              setInputMessage('')
              
    }

//* delete Car

    const Delete = (M) => {
        const car = Voitures.find((u)=>u.Matricule===M)
        const confirmation=window.confirm(`...deleting car N° ${M} : ${car.Marque}  Modele: ${car.Modele}`)
        if (confirmation){dispatch(deleteCar(M));setInputMessage('') }
        
    }
   
//* Search by Matricule 

    function search(){
        // console.log(input.current.value)
        dispatch(searchCar(input.current.value))   
    }
    
    function Searchinput(){
        setInputMessage(
            <>
                <h1>Search by Matricule  : </h1>
                <input type="text" ref={input} placeholder='Matricule....'  />
                <button onClick={()=>search()}>Search </button>
                <button onClick={()=>window.location.reload()}>Reload</button>
            </>
        )
    }
 
//* Clear iputs 
    function clear(){
        setInputMessage('')
    }

    function clearInputs() {
        Matricule.current.value = '';
        Marque.current.value = '';
        prix.current.value = '';
        Date.current.value = '';
        Modele.current.value = '';
    }
  
//* delete all 

    function DeleteAll(){
        dispatch(deletall())
        setInputMessage('')
    }
    return (
        <div>
            <button onClick={()=>AddCar()}>Ajouter Voiture</button> | <button onClick={()=>Searchinput()}>Rechercher Voiture</button><br />
            <br />
            <span>{inputMessga}</span>
            <br />
            <h1>Gestion des Voitures</h1>
            {Numberofcars !==0  ? <table border={1}>
                <thead>
                    <tr>
                        <td>Matricule</td>
                        <td>Marque</td>
                        <td>Modele</td>
                        <td>Date mise en circulation</td>
                        <td>prix</td>
                        <td colSpan={2}>Action <button style={{marginLeft: "20.5px",}} onClick={()=>DeleteAll()}>Delete All </button></td>
                    </tr>
                </thead>
                <tbody>
                {allCars.map((V, index)=> {
                            return (
                            <tr key={index} className='tr'>
                                <td>{V.Matricule}</td>
                                <td>{V.Marque}</td>
                                <td>{V.Modele}</td>
                                <td>{V.Date_circulation}</td>
                                <td>{V.Prix}</td>
                                <td>
                                <button onClick={()=>UpdateCarinput(V.Matricule)}>Modifier</button>
                                <button onClick={()=>Delete(V.Matricule)} >Supprimer</button>
                                </td>
                            </tr>
                             )
                            }) }
                </tbody>
            </table>:<h1 style={{textAlign:'center',color:'red',fontWeight:'lighter',border:' groove',borderRadius: '7px' ,}}>Nothing to show </h1>}
        </div>
    );
}

export default App;