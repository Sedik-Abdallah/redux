import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { villes } from './Ville';
import { addStg } from './Actions';

const App = () => {
    const stgs = useSelector((data)=>data.stgs);
    const idcounter=stgs.map(stg=>stg.id)
    const dispatch=useDispatch()
    const [Inputmessage,setInputmessage]=useState('')
    const Id=useRef()
    const Nom=useRef()
    const Prenom=useRef()
    const Code=useRef()
    const Ville=useRef()
    const Note=useRef()

//* add a new stagiaire

    function Addnewstg(){
        setInputmessage(
            <>
                <h2>Ajout d'un stagiare :</h2><br/>
                <label >id :</label><input type="text" ref={Id} placeholder="id...." /><br/>
                <label >Nom :</label><input type="text" ref={Nom}  placeholder="Nom...." /><br/>
                <label >Prenom :</label><input type="text"  ref={Prenom}  placeholder="Prenom...." /><br/>
                <label >ville :</label>
                <select ref={Ville}>
                    <option value="">select ville</option>
                    {villes.map((v)=><option value={v.region}>{v.region}</option>)}
                </select><br/>
                <label >Code postal:</label><input type="text"  ref={Code}  placeholder="code postal...." /><br/>
                <label >note :</label><input type="text"  ref={Note}  placeholder="Note...." /><br/>
        <button onClick={Click}>Add</button>
            </>
        )
    }
    function Click(){
        dispatch(addStg({
            id:Math.max(Number(...idcounter))+1,
            name:Nom.current.value,
            prenom:Prenom.current.value,
            Ville:Ville.current.value,
            note:Note.current.value,
            code_postal:Code.current.value
        }))
    }
    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Nom</td>
                        <td>Prenom</td>
                        <td>ville</td>
                        <td>code postal</td>
                        <td>Note</td>
                        <td>Action <button>Delete All </button></td>
                    </tr>
                </thead>
                <tbody>
                    {stgs.map((stg, index)=> {
                            return (
                            <tr key={index}>
                                <td>{stg.id}</td>
                                <td>{stg.name}</td>
                                <td>{stg.prenom}</td>
                                <td>{stg.ville}</td>
                                <td>{stg.code_postal}</td>
                                <td>{stg.note}</td>
                                <td>
                                <button>Modifier</button>
                                <button>Supprimer</button>
                                </td>
                            </tr>
                            )
                        }) }
                </tbody>
            </table><br /><br />
            {Inputmessage}<br/><br/>
            <div>
                <button onClick={Addnewstg}>Ajouter</button>
                <button>Filter ville et Nom</button>
                <button>Vider</button>
                <button>initialiser recherche</button>
            </div><br /><br />
            <div>
                <ul>
                    <li>
                        la Moyenne generale la plus Elevee est :
                    </li>
                    <li>
                        la Moyenne generale la plus moins Elevee est :
                    </li>
                    <li>
                        la Moyenne generale de class est :
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default App;
