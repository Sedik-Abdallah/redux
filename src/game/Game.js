import React, { useEffect, useRef, useState } from 'react'

const Game = ({isActive, setIsActive, data}) => {
    const inputRef = useRef()
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const [winner, setWinner] = useState("")

    useEffect(() => {
        const input = inputRef.current.value

        if (parseInt(input) === x + 1){
            setWinner("Player 1 Wins")
        }else if (parseInt(input) === y + 1){
            setWinner("Player 2 Wins")
        }else if (parseInt(input) === x + 1 && parseInt(input) === y + 1 ){
            setWinner("Both Players Wins")
        }else {
            setWinner("")
        }
    }, [x, y])

    function getRandom(){
        setX(Math.floor(Math.random() * data.length)) 
        setY(Math.floor(Math.random() * data.length)) 
    }


  return (
    <div className='container ms-5'>
        <div>
            <h1>{winner}</h1>
        </div>

            <div>
                <img src={`images/${data[x]}`} alt='dice' />
                <img src={`images/${data[y]}`} alt='dice' />
            </div>
            
        <div className='p-5'>
            <input type='text' ref={inputRef} />
            <button onClick={getRandom}>start</button>
            <button onClick={() => setIsActive(!isActive)}>instructions</button>
        </div>
    </div>
  )
}

export default Game