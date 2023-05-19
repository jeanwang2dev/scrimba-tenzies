function Die(props) {
    return (
        <div 
            className={`die ${props.isHeld ? "bg-diceGreen" : ""}`}
            onClick={props.holdDice}
        >
            <span className="text-3xl font-bold">{props.value}</span>
        </div>
    )
}

export default Die