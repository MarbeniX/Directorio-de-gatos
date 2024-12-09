import Gato2Img from '../images/Gato2.png'
import MessageIcon from '../images/MessageIcon.png'
import PhoneIcon from '../images/PhoneIcon.png'
import '../css/index.css'

export default function Gato2() {
    return(
        <div className="Gato1Div">
            <div className="Gato1Img">
                <img src={Gato2Img} alt="Gato1" />
            </div>
            <div className="Gato1Info">
                <h1>Fluffykins</h1>
                    <div>
                        <img src={PhoneIcon} alt="PhoneIcon" />
                        <p>(212) 555-1245</p>
                    </div>
                    <div>
                        <img src={MessageIcon} alt="Messageicon" />
                        <p>fluff@me.com</p>
                    </div>
            </div>
        </div>
    )
}