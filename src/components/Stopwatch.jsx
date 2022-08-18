import { useState, useEffect } from "react"

const Stopwatch = () => {
    const [timer, setTimer] = useState(0)
    const [start, setStart] = useState(false)

    useEffect(() => {
        let interval = null

        if(start) {
            interval = setInterval(() => {
                setTimer(prevTimer => prevTimer + 1)
            }, 1000)
        } 
        return () => clearInterval(interval)
    }, [start])

    const resetTimer = () => {
        setTimer(0)
        setStart(false)
    }

    let minutes = ~~(timer / 60);
    let seconds = timer % 60;

    const timerStyle = {
        color: "black",
        fontSize: "2rem"
    }

    return (
        <div>
            <h3><i className="bi bi-stopwatch" style={timerStyle}></i> Stopwatch</h3>
            <h1 className="countdown text-center">{minutes < 10 ? `0${minutes}`: minutes}:{seconds < 10 ? `0${seconds}`: seconds}</h1>
            <div className="d-flex justify-content-between px-4">
                <button onClick={resetTimer} className="btn btn-danger">Reset</button>
                <button onClick={() => setStart(prevStart => !prevStart)} className="btn btn-danger">{!start ? "Start" : "Pause"}</button>
            </div>
        </div>
    )
}

export default Stopwatch