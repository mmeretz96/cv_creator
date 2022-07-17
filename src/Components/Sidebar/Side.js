import "../../Assets/Styles/Side.css"
import Contact from "./Contact"
import Hobbies from "./Hobbies"
import Language from "./Language"
import Person from "./Person"

const Side = () => {


  return (
    <div className="Side">
      <Person/>
      <Contact/>
      <Language/>
      <Hobbies/>
    </div>
  )
}

export default Side