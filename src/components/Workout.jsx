import Exercises from "./Exercises"

const Workout = (props) => {
    const workoutList = props.data.map(item => {
        return (
            <Exercises 
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <div className="my-3 bubble">
            <div className="workout-list d-flex justify-content-center justify-content-sm-start pt-3">
                {workoutList}
            </div>
        </div>
    )
}

export default Workout;