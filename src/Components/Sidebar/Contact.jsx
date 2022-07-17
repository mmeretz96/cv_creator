import Textfield from "../Textfield"
import Marker from "../../Assets/Images/marker.svg"
import Phone from "../../Assets/Images/phone.svg"
import Envelope from "../../Assets/Images/envelope.svg"
import Globe from "../../Assets/Images/globe.svg"

const Contact = () => {


  return(
    <div className="Contact">
      <div className="heading">
        <h3>Contact</h3>
      </div>
      <div className="contact-wrapper">
        <img src={Marker} alt="" className="icon"/>
        <Textfield defaultText="Address" />
      </div>
      <div className="contact-wrapper">
        <img src={Phone} alt="" className="icon"/>
        <Textfield defaultText="Phone Number" />
      </div>
      <div className="contact-wrapper">
        <img src={Envelope} alt="" className="icon"/>
        <Textfield defaultText="eMail" />
      </div>
      <div className="contact-wrapper">
        <img src={Globe} alt="" className="icon"/>
        <Textfield defaultText="Website" />
      </div>
    </div>
  )
}

export default Contact