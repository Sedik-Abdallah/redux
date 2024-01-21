import React, { useState } from 'react';
import { produits } from './Data';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addproduit, deleteproduit } from './CartReducer';

const Home = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);



  function buttonColor(P) {
    const ids = cart.map(c => c.id);
    const index = ids.indexOf(P.id);
    if (index !== -1) {
      return (
        <button style={{color:'red'}} onClick={() => dispatch(deleteproduit(P))}>
          remove from Cart
        </button>
      );
    } else {
      return (
        <button onClick={() => dispatch(addproduit(P))}>
          Add to Cart
        </button>
      );
    }
  }
  

  const style = {
    display: 'flex',
    justifyContent: 'center', 
    flexWrap: 'wrap',
    marginTop: '100px',
    objectFit: 'cover'
  };

  return (
    <>
        <Link to={'/'}>Home</Link>
        <Link  style={{position:'sticky',display:'flex',
      justifyContent:'end'}} to='/Cart'>Cart {cart.length} </Link>
      
      <div style={style}>
        {produits.map(P => (
          <div key={P.id}>
            <img src={P.image} alt='' width={360} height={360} />
            <h4>{P.name}</h4>
            <p> price : {P.price} DH  </p>
            {buttonColor(P)}
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;

