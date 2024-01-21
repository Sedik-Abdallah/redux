import React from 'react';
import { useSelector } from 'react-redux';

const Afficher = () => {
    const allcars=useSelector(state=>state.ListeSimulation)
    return (
        <div>
            <table>
                <thead>
                    <th>marque</th>
                    <th>date_mise_circulation</th>
                    <th>valeur_imposable</th>
                    <th>montant</th>
                    <th>action</th>
                </thead>
                <tbody>
                    {allcars.map((c)=>{
                        return (
                            <tr>
                                <td>{c.marque}</td>
                                <td>{c.date_mise_circulation}</td>
                                <td>{c.valeur_imposable}</td>
                                <td>{c.montant}</td>
                                <td><button>delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Afficher;
