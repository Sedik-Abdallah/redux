import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStg } from './reducer';
import { Link } from "react-router-dom";
import { UserTitle } from './UserTitre';
const Home = () => {
    UserTitle('Home')
    const stgs=useSelector(state=>state.stgrs)
    const sortstg=[...stgs]
    sortstg.sort((a,b)=>a.num-b.num)
    const dispatch=useDispatch()
    const [message,setMessage]=useState('')

    function Updatestg(){

    }    

    function Deletestg(s)
    {
        let del=window.confirm('.....ARE you sure!')
        if (del) dispatch(deleteStg(s))
    }


    return (
        <>
            <Link to='/add'>Add </Link>
            {message}
            <h1>Gestion des stagiaires :</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Num</th><th>Nom</th><th>filiere</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sortstg.map(S=>(
                            <tr>
                                <td>{S.num}</td><td>{S.nom}</td><td>{S.filiere}</td>
                                <td>
                                    <button>update</button><button  onClick={()=>Deletestg(S)}>delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}

export default Home;
