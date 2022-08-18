import Exercises from "./Exercises"

const Workout = (props) => {
    // This component takes in the name of the workout, and full routine as props from "data.js"

    // Maps through each exercise from "data.js" which corresponds to the nav button which was pressed
    const workoutList = props.data.map(item => {
        return (
            // Returns that information through the Exercises.jsx componenet
            <Exercises 
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <div className="my-3 bubble">
            <div className="workout-list d-flex justify-content-center justify-content-sm-start pt-3">
                {/* Renders the entire workout and displays it to the screen*/}
                {workoutList}
            </div>
        </div>
    )
}

export default Workout;