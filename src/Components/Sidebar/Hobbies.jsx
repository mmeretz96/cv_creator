import ComponentList from "../ComponentList"
import Textfield from "../Textfield"

const Hobbies = () => {

  return (
    <div className="Hobbies">
      <div className="heading">
        <h3>Hobbies</h3>
      </div>

      <ComponentList 
      component= {
        <div className="container">
          <div className="text">
            <Textfield defaultText="Hobby"/>
          </div>
        </div>
      }/>
    </div>
  )
}

export default Hobbies