import Gato1 from '../images/Gato1.png'
import MessageIcon from '../images/MessageIcon.png'
import PhoneIcon from '../images/PhoneIcon.png'
import '../css/index.css'

export default function Gato(props) {
    return(
        <div className="Gato1Div">
            <div className="Gato1Img">
                <img src={props.img} alt={`Foto de ${props.name}`} />
            </div>
            <div className="Gato1Info">
                <h1>{props.name}</h1>
                    <div>
                        <img src={PhoneIcon} alt="PhoneIcon" />
                        <p>{props.phone}</p>
                    </div>
                    <div>
                        <img src={MessageIcon} alt="Messageicon" />
                        <p>{props.email}</p>
                    </div>
            </div>
        </div>
    )
}