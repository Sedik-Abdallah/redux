import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteStg,deletall,searchstg } from "./action/StgAction";
import { useState } from "react";

function Allstg() {
    const dispatch = useDispatch();
    const stgs = useSelector((data)=>data.stgs);
    const [input,setInput]=useState('')
    const [mess,setMessags]=useState('')
    const N=stgs.length;
    let somme= stgs.reduce((som,n)=>{som +=Number(n.note); return som},0)
    const moy=(somme/N).toFixed(2)
            
    function search(){
        dispatch(searchstg(input))
        setMessags(<button onClick={()=>window.location.reload()}>Reload</button>)
    }
    

    function Supprimer(id){
        const confirmation=window.confirm('are you sure!')
        if (confirmation){dispatch(deleteStg(id))}
    }
    return (
        <div> 
            <h2>Ajouter des stagiaires:  &nbsp;  <Link to="/add"><button>Add </button></Link></h2>
            <h1>liste des stagiaires</h1>
            <input type="number" min={1} value={input} onChange={(e)=>setInput(e.target.value)} name="input"
                placeholder="search by id......"/> <button onClick={()=>search()}>Search</button><span>{mess}</span>
            {}
            {N!==0  ? 
            <table border={1}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Nom</td>
                        <td>Prenom</td>
                        <td>Filiere</td>
                        <td>Note</td>
                        <td>Admin/Non Admis</td>
                        <td>Action <button style={{marginLeft: "20.5px",}} onClick={()=>dispatch(deletall())}>Delete All </button></td>
                    </tr>
                </thead>
                <tbody>
                    {stgs.map((stg, index)=> {
                            return (
                            <tr key={index}>
                                <td>{stg.id}</td>
                                <td>{stg.name}</td>
                                <td>{stg.prenom}</td>
                                <td>{stg.filiere}</td>
                                <td>{stg.note}</td>
                                <td>{stg.note>=10?'Admis':'non Admis'}</td>
                                <td>
                                <Link to={`/updateStg/${stg.id}`}><button>Modifier</button></Link>
                                <button onClick={()=>Supprimer(stg.id)}>Supprimer</button>
                                </td>
                            </tr>
                            )
                        }) }
                </tbody>
            </table>: <h1>vide</h1> }
            
            {N===0 ?null:<h1>Moyenne generale est : {moy}</h1> }
        </div>
    )
}
export default Allstg