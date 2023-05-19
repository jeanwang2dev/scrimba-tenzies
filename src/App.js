import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

import Die from "./components/Die"


const App = () => {

    const[dice, setDice] = useState(allNewDice)
    const[tenzies, setTenzies] = useState(false)


    useEffect( () => {
        const isAllDiceHeld = dice.every( die => die.isHeld ? true:false)
        const firstValue = dice[0].value;
        const hasSameValue = dice.every( die => die.value === firstValue ? true:false)
        if( isAllDiceHeld && hasSameValue){
            setTenzies(true)
            console.log('You won!')
        }
    }, [dice])    

    function allNewDice(){
        let newDiceArr = [];
        for(let i = 0; i< 10; i++){
            newDiceArr.push( { 
                value: Math.ceil(Math.random()*6), 
                isHeld: false,
                id: nanoid()
            } )
        }
        
        return newDiceArr;
    }

    function holdDice(dieId) {
        setDice(prevDice => prevDice.map( die => {
            return die.id === dieId ?
                 {...die, isHeld:!die.isHeld} :
                 die
        }))
    }

    function rollDice() {
        setDice(prevDice => prevDice.map( die => {
            return !die.isHeld ? 
                {...die, value: Math.ceil(Math.random()*6 )} :
                die

        } ))
    }

    const diceElements = dice.map( die => 
        <Die 
            key={die.id} 
            value={die.value}    
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)}         
        /> 
    )


    return (
        <div className="w-fit pt-8 mx-auto ">           
            <main className="flex justify-center items-center w-96 h-96 bg-primary">
                { tenzies && <Confetti /> }
                <div className="w-80 h-80 bg-[#F5F5F5] rounded-lg flex flex-col space-y-3 justify-center items-center p-3">
                    <h1 className="font-bold text-2xl">Tenzies</h1>
                    <p className="w-56 text-xs text-[#4A4E74] font-inter leading-tight text-center">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                    <div className="dice-container">
                        {diceElements}
                    </div>
                    <button 
                        onClick={rollDice} 
                        className="font-bold text-white bg-btnBlue px-3 py-1 rounded">{ tenzies ? "New Game" : "Roll"}</button>
 
                </div>
            </main>
        </div>
    )
}

export default App;