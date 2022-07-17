import { useState } from "react"
import uniqid from "uniqid"
import Trash from "../Assets/Images/trash.svg"
import Add from "../Assets/Images/add.svg"

const ComponentList = (props) => {
  const [fields, setFields] = useState([])

  const addField = () => {
    const id = uniqid()
    const newField = {
      dom:
        <div key = {id} className="item-container">
          {props.component}
          <div className="delete">
            <img 
              src={Trash}  
              alt="" 
              className="icon hidden" 
              onClick={() => {removeField(id)}}/>
          </div>
        </div>,
      id: id
    }

    setFields(fields => [...fields, newField])
  }

  const removeField = (id) => {
    setFields(fields => fields.filter(field => field.id !== id))
  }

  const renderFields = () => {
    const items = fields.map(field=> field.dom)
    return (<div className="field-container">
      {items}
    </div>)
  } 

  return (
    <div className="ComponentList">
      {renderFields()}
      <div className="add-container" onClick={addField}>
        Add Item
        <img 
          src={Add}
          alt="" 
          className="icon" 
          />
      </div>
    </div>
  )
}

export default ComponentList