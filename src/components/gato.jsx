import Gato1 from '../images/Gato1.png'
import MessageIcon from '../images/MessageIcon.png'
import PhoneIcon from '../images/PhoneIcon.png'
import '../css/index.css'

export default function Gato() {
    return(
        <div className="Gato1Div">
            <div className="Gato1Img">
                <img src={Gato1} alt="Gato1" />
            </div>
            <div className="Gato1Info">
                <h1>Mr. Whiskerson</h1>
                    <div>
                        <img src={PhoneIcon} alt="PhoneIcon" />
                        <p>(212) 555-1234</p>
                    </div>
                    <div>
                        <img src={MessageIcon} alt="Messageicon" />
                        <p>mr.whiskax@catnap.meow</p>
                    </div>
            </div>
        </div>
    )
}