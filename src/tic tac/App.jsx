import React, { useState } from 'react';

const App = () => {
    const [turn,setTurn]=useState(true)
    const [X,setX]=useState('X')
    const [O,setO]=useState('O')
    const combos =[
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [3,4,5],
        [6,7,8],
        [2,4,6],
        [2,5,8],
        [1,4,7]
        
    ]
    function Play(e){
        if (turn){
            e.target.innerHTML=X
            setTurn(false)
        }
        else{
            e.target.innerHTML=O
            setTurn(true)
        }
        
    }
    return (
        <div>
            <div className='row1'>
               <button onClick={(e)=>Play(e)} style={{width:'100px',height:'100px'}} ></button>
                <button onClick={(e)=>Play(e)} style={{width:'100px',height:'100px'}} ></button>
                <button onClick={(e)=>Play(e)} style={{width:'100px',height:'100px'}} ></button> 
            </div>
            <div className='row2'>
               <button onClick={(e)=>Play(e)} style={{width:'100px',height:'100px'}} ></button>
                <button onClick={(e)=>Play(e)} style={{width:'100px',height:'100px'}} ></button>
                <button onClick={(e)=>Play(e)} style={{width:'100px',height:'100px'}} ></button> 
            </div>
            <div className='row3'>
               <button onClick={(e)=>Play(e)} style={{width:'100px',height:'100px'}} ></button>
                <button onClick={(e)=>Play(e)} style={{width:'100px',height:'100px'}} ></button>
                <button onClick={(e)=>Play(e)} style={{width:'100px',height:'100px'}} ></button> 
            </div>
            
           
        </div>
    );
}

export default App;
