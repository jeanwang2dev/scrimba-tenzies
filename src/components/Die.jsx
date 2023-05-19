import dieOne from '../img/dieFace1.png'
import dieTwo from '../img/dieFace2.png'
import dieThree from '../img/dieFace3.png'
import dieFour from '../img/dieFace4.png'
import dieFive from '../img/dieFace5.png'
import dieSix from '../img/dieFace6.png'


function Die(props) {
    let dieFace = "";
    switch (props.value) {
      case 1:
        dieFace = dieOne;
        break;
      case 2:
        dieFace = dieTwo;
        break;
      case 3:
        dieFace = dieThree;
        break;
      case 4:
        dieFace = dieFour;
        break;
      case 5:
        dieFace = dieFive;
        break;
      case 6:
        dieFace = dieSix;
        break;
      default:
        break;
    }

    return (
        <div 
            className={`die ${props.isHeld ? "bg-diceGreen" : ""}`}
            onClick={props.holdDice}
            style={{
                backgroundImage: `url(${dieFace})`,
                backgroundSize: "cover",
              }}
        >
            {/* <span className="text-3xl font-bold">{props.value}</span> */}
        </div>
    )
}

export default Die