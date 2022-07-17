import Check from "../Assets/Images/check.svg"

const Editbutton = (props) => {

  return (
      <div>
        {props.editing? <img 
      src={props.editing? Check : null} 
      alt="" 
      className="icon" 
      onClick={props.toggleEditing}
      />: null}
      </div>
  )
}

export default Editbutton