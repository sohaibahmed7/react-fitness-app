import { useState, useEffect } from "react";

const Timer = () => {
    // Starting number of the seconds for the timer (2 minutes)
    const startTime = 120

    // Initializing state for the value of the timer to be displayed
    const [countdown, setCountdown] = useState(startTime)
    // Initializing state to determine whether or not the start/pause button has been pressed
    const [start, setStart] = useState(false)

    useEffect(() => {
        let interval = null /* Variable to be used as an interval with setInterval */

        // If the start button has been pressed, begin running the timer
        if (start) {
            interval = setInterval(() => {
                // Continue running the timer only if its current value is greater then 0
                setCountdown(prevCountdown => prevCountdown > 0 ? prevCountdown - 1 : resetCountdown())
            }, 1000)
        }
        // If the timer reaches zero, or the reset button has been pressed,
        // clear the time interval and reset the timer
        return () => clearInterval(interval)
    }, [start])

    // Increasing the value of the timer by 30 seconds
    const increaseCountdown = () => {
        setCountdown(prevCountdown => prevCountdown + 30)
    }

    // Decreasing the value of the timer by 30 seconds if the value is already greater than 30 seconds
    const decreaseCountdown = () => {
        setCountdown(prevCountdown => 
            prevCountdown > 30 ? prevCountdown - 30 : prevCountdown
        )
    }

    // Resetting the value of the timer to zero
    const resetCountdown = () => {
        setStart(false)
        setCountdown(startTime)
    }

    // Calculating minutes and seconds
    let minutes = ~~(countdown / 60);
    let seconds = countdown % 60;

    // Formatting the time for nicer design
    const minFormat = minutes < 10 ? `0${minutes}`: minutes
    const secFormat = seconds < 10 ? `0${seconds}`: seconds
    
    // Styling for the timer
    const timerStyle = {
        color: "black",
        fontSize: "2rem"
    }

    return (
        <div>
            <h3><i className="bi bi-alarm" style={timerStyle}></i> Timer</h3>
            {/* Displaying the formatted timer */}
            <h1 className="countdown text-center">{minFormat}:{secFormat}</h1>
            <div className="d-flex justify-content-between">
                {/* buttons that increase/decrease the time */}
                <button onClick={decreaseCountdown} className="btn btn-primary">-30 sec</button>
                <button onClick={increaseCountdown} className="btn btn-primary">+30 sec</button>
            </div>
            <div className="d-flex justify-content-between mt-2">
                <button onClick={resetCountdown} className="btn btn-danger">Reset</button>
                {/* Changing the button from 'start' to 'pause' upon presses*/}
                <button onClick={() => setStart(prevStart => !prevStart)} className="btn btn-danger">{!start ? "Start" : "Pause"}</button>
            </div>
        </div>
    )
}

export default Timer;