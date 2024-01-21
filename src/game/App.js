import React, { useState } from 'react'
import Game from './Game'
import Instructions from './Instructions'

const data = [
    "Dice1.png",
    "Dice2.png",
    "Dice3.png",
    "Dice4.png",
    "Dice5.png",
    "Dice6.png",
]


const App = () => {
    const [isActive, setIsActive] = useState(true)    
    
  return (
    <div>
        {isActive && <Game isActive={isActive} setIsActive={setIsActive} data={data} />}
        {!isActive && <Instructions isActive={isActive} setIsActive={setIsActive} />}

    </div>
  )
}

export default App