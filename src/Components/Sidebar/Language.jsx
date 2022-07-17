import ComponentList from "../ComponentList"
import Slider from "../Slider"
import Textfield from "../Textfield"


const Language = () => {

  return (
    <div className="Language">
      <div className="heading">
        <h3>Language</h3>
      </div>
      <ComponentList 
        component={
          <div className="container">
            <div className="text">
              <Textfield defaultText="Language"/>
            </div>
            <div className="slider">
              <Slider/>
            </div>
          </div>
      }/>
    </div>
  )
}

export default Language