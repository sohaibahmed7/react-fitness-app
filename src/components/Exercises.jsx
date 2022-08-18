const Exercises = (props) => {
    // This component takes in the information regarding each exericse from "data.js"
    return (
        <div className="exercise-card me-2 mb-4">
            <h4 className="">{props.name}</h4>
            <div className="exercise-info">
                <p>{props.sets} sets</p>
                <p>{props.reps} reps</p>
            </div>
            {/* If the exercise contains the 'superset' key/value pair and is true, "SUPERSET" is also rendered to the screen*/}
            {props.superset && <p className="exercise-superset">SUPERSET</p>}
        </div>
    )
}

export default Exercises;