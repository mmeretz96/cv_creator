import { useState } from "react"
import Editbutton from "./Editbutton"


const Textfield = (props) => {

  const [editing, setEditing] = useState(false)
  const [text, setText] = useState(props.defaultText)

  const toggleEditing = () => {
    setEditing(!editing)
  }

  return (
    <div className="Textfield">
      {editing
      ? <input 
        type="text" 
        defaultValue={text} 
        onChange={(e)=>{setText(e.target.value)}}
        />
      : <p>{text}</p>}

      <Editbutton 
        toggleEditing = {toggleEditing} 
        editing = {editing}
      />
    </div>    
  )
}

export default Textfield