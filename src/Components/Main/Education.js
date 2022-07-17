
import "../../Assets/Styles/Education.css"
import Textarea from "../Textarea"
import Textfield from "../Textfield"
import ComponentList from "../ComponentList"

const Education = () => {
  return (
    <div className="Education">
      <div className="heading">
        <h2>Education</h2>
      </div>
      
      <ComponentList component={<div className="container">
            <div className="box-heading">
              <Textfield defaultText="School Name"/>
            </div>
            <div className="date">
              <Textfield defaultText="MM/YYYY - MM/YYYY"/>
            </div>
            <div className="text">
              <Textarea defaultText="Text here..."/>
            </div>
          </div>}/>
    </div>
  )
}

export default Education