import { useState } from "react"
import Editbutton from "./Editbutton"

const Slider = (props) => {
  const [editing, setEditing] = useState(false)
  const [value, setValue] = useState(30)

  const toggleEditing = () => {
    setEditing(!editing)
  }

  return (
    <div className="Slider">
      {editing
      ?<input type="range" min={0} max={100} defaultValue={value} step={1} onChange={(e) => {setValue(e.target.value)}}/>
      : <progress onClick={toggleEditing} value={value}  min={0} max={100}> </progress>}
      
      <Editbutton
        toggleEditing = {toggleEditing} 
        editing = {editing} />
    </div>
  )
}

export default  Slider