import Textfield from "../Textfield"
import "../../Assets/Styles/Skills.css"
import ComponentList from "../ComponentList"
import Slider from "../Slider"

const Skills = () => {
  return (
    <div className="Skills">
      <div className="heading">
        <h2>Professional Skills</h2>
      </div>
      
      <ComponentList 
        component={
          <div className="container">
            <div className="text">
              <Textfield defaultText="Skill"/>
            </div>
            <div className="slider">
              <Slider/>
            </div>
          </div>
        }
      />
    </div>
  )
}

export default Skills