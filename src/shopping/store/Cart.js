import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteproduit } from './CartReducer';


const Cart = () => {
    const dispatch=useDispatch()
    const total=useSelector(state=>state.total)
    const cart=useSelector(state=>state.cart)
    const rowStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: '20px',
        border:'1px'
       
      };
    return (
        <>
        <Link to={'/'} >Home</Link>
        <Link to='/Cart' style={{position:'absolute',top:'8px',right:'16px'}}>Cart {cart.length} </Link>
        <div style={{marginTop:'10px',}} >
            {cart.map(P=>(
                <div class="card" key={P.id} style={rowStyle} >
                    <img src={P.image} alt='' style={{objectFit: 'cover',width: '100px' , height:'100px'}} />
                    <h4>{P.name}</h4>
                    <p>{P.price} <span>
                    <h1>{P.count}</h1>
                    <button onClick={()=>dispatch(deleteproduit(P))}>Remove from Cart</button></span></p>
                </div>
            ))}
            <h1>total : {total}</h1>
        </div>
        </>
    );
    
}

export default Cart;
