import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'


import Die from "./components/Die"


const App = () => {

    const[dice, setDice] = useState(allNewDice)
    const[tenzies, setTenzies] = useState(false)
    const[rolls, setRolls] = useState(0)

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
        if(tenzies) {
            setTenzies(false)
            setDice(allNewDice)
            setRolls(0)
        } else {
            setRolls(prevRolls => prevRolls + 1)
            setDice(prevDice => prevDice.map( die => {
                return !die.isHeld ? 
                    {...die, value: Math.ceil(Math.random()*6 )} :
                    die
    
            } ))
        }


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
            <main className="flex justify-center items-center w-[600px] h-[600px] bg-primary">
                { tenzies && <Confetti /> }
                <div className="w-[500px] h-[500px] bg-[#F5F5F5] rounded-lg flex flex-col space-y-5 justify-center items-center p-3">
                    <h1 className="font-bold text-4xl">Tenzies</h1>
                    <p className="w-80 text-lg text-[#4A4E74] font-inter leading-tight text-center">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                    <div className="w-32 flex justify-around">
                        <p>Rolls: <span className="font-bold">{rolls}</span></p>
                    </div>
                    <div className="dice-container">
                        {diceElements}
                    </div>
                    <button 
                        onClick={rollDice} 
                        className="font-bold text-2xl text-white bg-btnBlue px-6 py-1 rounded">{ tenzies ? "New Game" : "Roll"}</button>
 
                </div>
            </main>
        </div>
    )
}

export default App;