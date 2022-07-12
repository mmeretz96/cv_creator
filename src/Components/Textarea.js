import { useState } from "react"
import Pencil from "../Assets/Images/pencil.svg"
import Check from "../Assets/Images/check.svg"
import Editbutton from "./Editbutton"

const Textarea = (props) => {

  const [editing, setEditing] = useState(false)
  const [text, setText] = useState(props.defaultText)

  const toggleEditing = () => {
    setEditing(!editing)
  }

  const fixCursorPos = (e) => {
    const val = e.target.value
    e.target.value = ""
    e.target.value = val
  }

  return (
    <div className="Textarea">
      {editing
      ? <textarea 
          name="about-me" 
          id="aboutMe" 
          cols="30" 
          rows="5" 
          autoFocus 
          onFocus={(e) => {fixCursorPos(e)}}
          onChange={(e)=> {setText(e.target.value)}} 
          defaultValue={text}
          >
        </textarea>
      :<p>{text}</p>}

      <Editbutton toggleEditing = {toggleEditing} editing = {editing}/>
    </div>
  )
}

export default Textarea