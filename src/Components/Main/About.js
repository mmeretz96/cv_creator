import "../../Assets/Styles/About.css"
import Textarea from "../Textarea"

const About = () => {


  return (
    <div className="About">
      <div className="heading">
        <h2>About me</h2>
      </div>
      <div className="textarea">
        <Textarea defaultText = "About me..."/>
      </div>
    </div>
  )
}

export default About