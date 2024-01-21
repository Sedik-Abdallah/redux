import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addCar,deleteCar } from './Action';

const CalculTaxe = () => {
    const dispatch = useDispatch()
    const [message,setMessage]=useState();
    const [valeur_imp,setValeur_imp]=useState();
    const [montant,setMontant]=useState();
    const Marque =useRef()
    const Date_v =useRef()
    const [Valeur_neuf,setValeur_neuf]=useState();
   


    //* Calcul 
    function valider(){
        let today=new Date();
        let dns=new Date (Date_v.current.value);
        let diff=today.getTime()-dns.getTime();
        let age = parseInt(diff/(1000*3600*24*365));
        
        if(age < 1){
            setValeur_imp( Valeur_neuf)
         }
         else if(age >= 1 && age <2){
           setValeur_imp( Valeur_neuf*0.9)
         }
         else if(age >= 2 && age <3){
           setValeur_imp( Valeur_neuf*0.8)
         }
         else if(age >= 3){
           setValeur_imp( Valeur_neuf*0.75)
         }
         //Calculer Montant
            let droitImport = valeur_imp * 0.175
            let TVA = valeur_imp * 0.2
            let taxeParafiscale = valeur_imp *0.0025
            let mont=Number(droitImport+TVA+taxeParafiscale)
            setMontant(mont);
        setMessage(
            <>
                <h3>valeur taxable : <span>{valeur_imp}</span> &nbsp; DH</h3>
                <h3>droit d'importation (17.5%) : <span>{droitImport.toFixed(2)}</span>&nbsp; DH</h3>
                <h3>TVa : <span>{TVA.toFixed(2)}</span>DH</h3>
                <h3>taxe parafiscale (0.25%): <span>{taxeParafiscale.toFixed(2)}</span>&nbsp; DH</h3>
                <h2>montant total des droit et taxes : <span>{mont.toFixed(2)}</span>&nbsp; DH</h2>
            </>
        )
        dispatch(addCar(
            {marque:Marque.current.value,
                date_mise_circulation:Date_v.current.value,
                valeur_imposable:valeur_imp,
                montant:montant
            }
        ))

           
    }

    return (
        <div >
            <h5>Calcul des droits et taxes :</h5>
            <p className='h1 pl-4'>information sur le vehicule :</p>
            <div className='container'>
                <p  >Marque du vehicule :</p> <input  type="text" ref={Marque} placeholder='Marque....'  />
                <p>modele du vehicule  :</p><input type="text" placeholder='modele....'  />
                <p>date de 1er mise en circulation :</p><input type="date" ref={Date_v} placeholder='mise en circulation....'  />
                <p>valeur a l'etat neuf:</p><input type="text" onChange={(e)=>setValeur_neuf(e.target.value)} placeholder="valeur a l'etat neuf...."  />
            </div>
            <button className="btn btn-primary" onClick={()=>valider()}>Valider</button>
            {message}
        </div>
    );
}

export default CalculTaxe;
