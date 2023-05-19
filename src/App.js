import { useState } from 'react'
import Die from "./components/Die"

const App = () => {

    const[dices, setDices] = useState(allNewDice)

    function allNewDice(){
        let newDiceArr = [];
        for(let i = 0; i< 10; i++){
            newDiceArr.push( Math.ceil(Math.random()*6) )
        }
        
        return newDiceArr;
    }

    function rollDice() {
        setDices(allNewDice())
    }

    const diceElements = dices.map( die => <Die value={die} /> )

    return (
        <div className="w-fit pt-8 mx-auto ">
            <main className="flex justify-center items-center w-96 h-96 bg-primary">
                <div className="w-80 h-80 bg-[#F5F5F5] rounded-lg flex flex-col space-y-3 justify-center items-center p-3">
                    <h1 className="font-bold text-2xl">Tenzies</h1>
                    <p className="w-56 text-xs text-[#4A4E74] font-inter leading-tight text-center">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                    <div className="dice-container">
                        {diceElements}
                    </div>
                    <button onClick={rollDice} className="font-bold text-white bg-btnBlue px-3 py-1 rounded">Roll</button>
 
                </div>
            </main>
        </div>
    )
}

export default App;