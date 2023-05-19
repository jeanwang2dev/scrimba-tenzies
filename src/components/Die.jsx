function Die(props) {
    return (
        <div 
            className={`dice ${props.isHeld ? "bg-diceGreen" : ""}`}
            onClick={props.holdDice}
        >
            <span className="text-xl font-bold">{props.value}</span>
        </div>
    )
}

export default Die