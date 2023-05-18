/**
 * Challenge: Start a brand new React app!
 * - Create a separate App component
 * - Import and render the App component here
 * - In the App component, render a <main> element
 * - Style everything to look like the slide
 */
import Die from "./components/Die"

const App = () => {
    return (
        <div className="w-fit pt-8 mx-auto ">
            <main className="flex justify-center items-center w-96 h-96 bg-primary">
                <div className="w-80 h-80 bg-[#F5F5F5] rounded-lg flex flex-col space-y-3 justify-center items-center p-3">
                    <h1 className="font-bold">Tenzies</h1>
                    <p className="w-56 text-xs font-inter leading-tight text-center">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                    <div className="dice-container">
                        <Die number={1}></Die>
                        <Die number={2}></Die>
                        <Die number={3}></Die>
                        <Die number={4}></Die>
                        <Die number={1}></Die>
                        <Die number={1}></Die>
                        <Die number={6}></Die>
                        <Die number={1}></Die>
                        <Die number={1}></Die>
                        <Die number={1}></Die>
                    </div>
                    <button className="font-bold text-white bg-btnBlue px-3 py-1 rounded">Roll</button>
 
                </div>
            </main>
        </div>
    )
}

export default App;