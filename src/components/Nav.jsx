import { useState } from "react"
import Workout from "./Workout"

const Nav = (props) => {
    // This component takes in the name of the workout, and full routine as props from "data.js"

    // State that checks if each individual nav button has been pressed
    const [isPressed, setIsPressed] = useState(false)

    // Handles when a nav button gets pressed/unpressed
    const handleClick = () => {
      setIsPressed(prevIsPressed => !prevIsPressed)
    }

    return (
        <div className="py-2 d-inline">
            <button className="btn btn-dark btn-lg mb-2 me-3 col-md-2" onClick={handleClick}>{props.name}</button>
            {/* If a button has been pressed, its corresponding workout will be rendered to the screen */}
            {isPressed && <Workout data={props.workout} day={props.name}/> }
        </div>
    )
}

export default Nav