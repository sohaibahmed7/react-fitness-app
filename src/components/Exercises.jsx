const Exercises = (props) => {
    return (
        <div className="exercise-card me-2 mb-4">
            <h4 className="">{props.name}</h4>
            <div className="exercise-info">
                <p>{props.sets} sets</p>
                <p>{props.reps} reps</p>
            </div>
            {props.superset && <p className="exercise-superset">SUPERSET</p>}
        </div>
    )
}

export default Exercises;