import Pencil from "../Assets/Images/pencil.svg"
import Check from "../Assets/Images/check.svg"

const Editbutton = (props) => {

  return (
    <img 
      src={props.editing? Check : Pencil} 
      alt="" 
      className="icon hidden" 
      onClick={props.toggleEditing}
      />
  )
}

export default Editbutton