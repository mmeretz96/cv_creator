import "../../Assets/Styles/Side.css"
import Contact from "./Contact"
import Language from "./Language"
import Person from "./Person"

const Side = () => {


  return (
    <div className="Side">
      <Person/>
      <Contact/>
      <Language/>
    </div>
  )
}

export default Side