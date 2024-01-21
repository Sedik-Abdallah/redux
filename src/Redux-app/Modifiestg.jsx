
import { useNavigate, useParams } from "react-router-dom"
import { updateStg } from "./action/StgAction"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";

const Modifiestg = () => {
        const {id} = useParams()
        const navigate=useNavigate();
        const stg = useSelector(data=>data.stgs.find((u)=>u.id===parseInt(id)));
        const [Nom, setNom] = useState(stg.name);
        const [Prenom, setPrenom] = useState(stg.prenom);
        const [Note, setNote] = useState(stg.note);
        const [Filiere, setFiliere] = useState(stg.filiere);
    
        const dispatch = useDispatch();
        const Click = () => {
            dispatch(updateStg({
                id:id,
                name:Nom,
                prenom:Prenom,
                filiere:Filiere,
                note:Note
            }))
            navigate('/')
       }
        return(
            <>
            <h2>Modifie stagiare N {id} :</h2>
            <input type="text" name='Nom' value={Nom} onChange={(e)=>setNom(e.target.value)} placeholder="Nom...." />
            <input type="text" name='Prenom' value={Prenom} onChange={(e)=>setPrenom(e.target.value)} placeholder="Prenom...." />
            <select name="filiere"  value={Filiere} onChange={(e)=>setFiliere(e.target.value)}placeholder="select.....">
                <option >-----select------</option>
                <option value="TDI">Developpement</option>
                <option value="TRI">Reseaux</option>
                <option value="TGE">Gestion</option>
            </select>
            <input type="text" name='note' value={Note} onChange={(e)=>setNote(e.target.value)} placeholder="Note...." />
            <button onClick={Click}>Add</button>
            <Link to="/"><button>return </button></Link>
            </>
        )
    }

export default Modifiestg;
