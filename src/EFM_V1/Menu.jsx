import React from 'react';
import CalculTaxe from './Calcul_taxe';
import HeaderEff from './Header';
import Afficher from './Afficher';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <BrowserRouter>
            <HeaderEff/>
            <Routes>
                <Route path='/1' element={<CalculTaxe />}/>
                <Route path='/2' element={<Afficher />}/>
            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Menu;
