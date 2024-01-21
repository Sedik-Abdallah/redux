import { addStg } from "./action/StgAction"
import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
//*import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
function Addstg(){
    //*const count = useSelector(data=>data.stgs.length);
    const navigate=useNavigate()
    const [Nom, setNom] = useState("");
    const [Prenom, setPrenom] = useState("");
    const [Note, setNote] = useState("");
    const [Filiere, setFiliere] = useState("");
    const idref=useRef();

    const dispatch = useDispatch();
    const Click = () => {
        dispatch(addStg({
            id:idref.current.value,
            name:Nom,
            prenom:Prenom,
            filiere:Filiere,
            note:Note
        }))
        setNom('');
        setPrenom('');
        setFiliere('');
        setNote('');
        navigate('/')
    }
    return(
        <>
        <h2>Ajout d'un stagiare :</h2>
        <input type="text" ref={idref} placeholder="id...." />
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
export default Addstg