import { useState } from "react"
import Workout from "./Workout"

const Nav = (props) => {
    const [isPressed, setIsPressed] = useState(false)

    const handleClick = () => {
      setIsPressed(prevIsPressed => !prevIsPressed)
    }

    return (
        <div className="py-2 d-inline">
            <button className="btn btn-dark mb-2 me-3" onClick={handleClick}>{props.name}</button>
            {isPressed && <Workout data={props.workout} day={props.name}/> }
        </div>
    )
}

export default Nav