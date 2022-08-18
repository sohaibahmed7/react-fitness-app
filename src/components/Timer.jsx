import { useState, useEffect } from "react";

const Timer = () => {
    const startTime = 120

    const [countdown, setCountdown] = useState(startTime)
    const [start, setStart] = useState(false)

    useEffect(() => {
        let interval = null

        if (start) {
            interval = setInterval(() => {
                setCountdown(prevCountdown => prevCountdown > 0 ? prevCountdown - 1 : setCountdown(0))
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [start])

    const increaseCountdown = () => {
        setCountdown(prevCountdown => prevCountdown + 30)
    }

    const decreaseCountdown = () => {
        setCountdown(prevCountdown => 
            prevCountdown > 30 ? prevCountdown - 30 : prevCountdown
        )
    }

    const resetCountdown = () => {
        setStart(false)
        setCountdown(startTime)
    }

    let minutes = ~~(countdown / 60);
    let seconds = countdown % 60;
    
    const timerStyle = {
        color: "black",
        fontSize: "2rem"
    }

    return (
        <div>
            <h3><i className="bi bi-alarm" style={timerStyle}></i> Timer</h3>
            <h1 className="countdown text-center">{minutes < 10 ? `0${minutes}`: minutes}:{seconds < 10 ? `0${seconds}`: seconds}</h1>
            <div className="d-flex justify-content-between">
                <button onClick={decreaseCountdown} className="btn btn-primary">-30 sec</button>
                <button onClick={increaseCountdown} className="btn btn-primary">+30 sec</button>
            </div>
            <div className="d-flex justify-content-between mt-2">
                <button onClick={resetCountdown} className="btn btn-danger">Reset</button>
                <button onClick={() => setStart(prevStart => !prevStart)} className="btn btn-danger">{!start ? "Start" : "Pause"}</button>
            </div>
        </div>
    )
}

export default Timer;