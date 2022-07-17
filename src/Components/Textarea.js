import { useState } from "react"
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
      :<p onClick={toggleEditing}>{text}</p>}

      <Editbutton toggleEditing = {toggleEditing} editing = {editing}/>
    </div>
  )
}

export default Textarea