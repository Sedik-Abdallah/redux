import React from 'react'

const Instructions = ({isActive, setIsActive}) => {
  return (
    <div>
        <div className='container-fluid'>
            <ul>
                <li>do this</li>
                <li>do this</li>
                <li>do this</li>
                <li>do this</li>
                <li>do this</li>
                <li>do this</li>
                <li>do this</li>
            </ul>
        </div>
        <div>
            <button onClick={() => setIsActive(!isActive)}>back to game</button>
        </div>
    </div>
  )
}

export default Instructions