import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {adduser ,deleteuser,updateuser,filteruser,clearfilter,deletall,searchuser} from './Action'

const App = () => {
    const users=useSelector(state=>state.users)
    const villes=useSelector(state=>state.villes)
    const searchres=useSelector(state=>state.searchres)
    const lastid = users.length;
    const [id, setId] = useState("");
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [ville, setVille] = useState(1);
    const [villeFilter, setVilleFilter] = useState(1);
    const dispatch = useDispatch()
    const [input,setInput]=useState('')
    const [mess,setMessags]=useState('')
    
    
//! to call the filtred citys from the store and put them in a new variable called allusers 
//! then use it to display all users 
    const usersFilter = useSelector(data=>data.filterusers);
    const allusers=usersFilter ? usersFilter : users; 
    allusers.sort((a,b)=>a.id-b.id)


//* save user
    function Save() {
        dispatch(adduser({ id:lastid+1, nom:nom, prenom:prenom, ville:parseInt(ville) }))
        Clear()
  }
//* Clear inputs 
    function Clear() {
        setNom('')
        setPrenom('')
        setVille(1)
    }
//* delete user
    const Delete = (id) => {
        const user = users.find((u)=>u.id===parseInt(id))
        const confirmation=window.confirm(`are you sure! ...deleting user N° ${id} : ${user.nom} ${user.prenom}`)
        if (confirmation){dispatch(deleteuser(id))}
        
    }
//* update user 'inputs'
   function update (id) {
        const user = users.find((u)=>u.id===parseInt(id))
        setId(id)
        setNom(user.nom)
        setPrenom(user.prenom)
        setVille(parseInt(user.ville))
    }
//* update user 
    const updateVF = () => {
        dispatch(updateuser({ id:id, nom:nom, prenom:prenom, ville:ville }))
        setId('')
    }
//* sort by city 
    function Filter ()  {
        dispatch(filteruser(villeFilter))
    }
//* to Clear users (initiale state)
    const Clearfilter = () => {
        dispatch(clearfilter(villeFilter))
    }

//* search by id 
function search(){
    dispatch(searchuser(input))
        setMessags(<button onClick={()=>window.location.reload()}>Reload</button>)
        console.log(searchres)
}

    return (
        <>
        <div>
            <h1>CRUD exemple</h1>
            Nom <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)} />
            Prenom <input type="text" value={prenom} onChange={(e)=>setPrenom(e.target.value)} />
            Ville 
            <select value={ville} onChange={(e)=>setVille(e.target.value)}>
                {villes.map(v=>(
                    <option value={v.id}>{v.nom}</option>
                    ))}
            </select>
           {id? <button onClick={updateVF}>update</button>:<button onClick={Save}>save</button>}
            <button onClick={Clear}>clear</button></div><br />

            <div>
                Filtrer par ville 
                <select value={villeFilter} onChange={(e)=>setVilleFilter(e.target.value)} >
                    {villes.map(v=>(
                    <option value={v.id}>{v.nom}</option> ))}
                </select>
                <button onClick={Filter}>Filtrer</button> <button onClick={Clearfilter}> Clear</button>
            </div><br />

            <div>
            <input type="number" min={1} value={input} onChange={(e)=>setInput(e.target.value)} name="input"
                placeholder="search by id......"/> 
                <button onClick={()=>search()}>Search</button><span>{mess}</span>
            </div>
            <div>
                <table border={1}>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>Nom</td>
                            <td>Prenom</td>
                            <td>ville</td>
                            <td colSpan={2}>action <button onClick={()=>dispatch(deletall())}>Delete All </button>
</td>
                        </tr>
                    </thead>
                    <tbody>

                        {allusers.map(u=>{
                            
                            const ville =villes.find(v=>v.id===parseInt(u.ville))
                            return(
                             <tr>
                             <td>{u.id}</td>
                             <td>{u.nom}</td>
                             <td>{u.prenom}</td>
                             <td>{ville.nom}</td>
                             <td ><button onClick={()=>update(u.id)} >Modifie</button>|<button onClick={()=>Delete(u.id)}>delete</button></td>
                         </tr>
                        )})}
                    </tbody>
                </table>
                <button onClick={()=>window.location.reload()}>return to the initial State </button>
            </div>
        </>
    );
}

export default App;

