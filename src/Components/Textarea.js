import { useState } from "react"
import Pencil from "../Assets/Images/pencil.svg"
import Check from "../Assets/Images/check.svg"

const Textarea = (props) => {

  const [editing, setEditing] = useState(false)
  const [text, setText] = useState(props.defaultText)

  const toggleEditing = () => {
    setEditing(!editing)
  }

  return (
    <div className="Textarea">
      {editing
      ? <textarea name="about-me" id="aboutMe" cols="30" rows="5" onChange={(e)=> {setText(e.target.value)}} defaultValue={text}></textarea>
      :<p>{text}</p>}
      <img src={editing? Check : Pencil} alt="" className="icon hidden" onClick={toggleEditing}/>
    </div>
  )
}

export default Textarea