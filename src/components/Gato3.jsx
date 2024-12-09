import Gato3Img from '../images/Gato3.png'
import MessageIcon from '../images/MessageIcon.png'
import PhoneIcon from '../images/PhoneIcon.png'
import '../css/index.css'

export default function Gato3() {
    return(
        <div className="Gato1Div">
            <div className="Gato1Img">
                <img src={Gato3Img} alt="Gato3" />
            </div>
            <div className="Gato1Info">
                <h1>Fluffykins</h1>
                    <div>
                        <img src={PhoneIcon} alt="PhoneIcon" />
                        <p>(212) 555-2412</p>
                    </div>
                    <div>
                        <img src={MessageIcon} alt="Messageicon" />
                        <p>adsfa@asdf.com</p>
                    </div>
            </div>
        </div>
    )
}