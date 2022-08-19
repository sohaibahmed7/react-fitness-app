import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Timer from './components/Timer';
import Stopwatch from './components/Stopwatch';
import BottomSVG from './components/BottomSVG';
import { Data } from "./data";

const App = () => {
  // Mapping through each workout routine and using their information to render as a nav button
  const workout = Data.Routine.map(item => {
    return (
      <Nav key={item.day} name={item.day} workout={item.workout}/>
    )
  })

  return (
    <>
      <BottomSVG />
      <div className='container position-relative mb-4 mb-md-0'>
        {/* Displaying the user information from "data.js"*/}
        <Header data={Data.UserInfo}/> 
        <div className='mt-3 d-md-flex'>
          <div className='container-fluid ps-0'>
            <h2>Select Workout</h2>
            {/* Displaying the nav buttons that were created*/}
            {workout}
          </div>
          <div className='timer-container bubble col-lg-3 py-3'>
            {/* Countdown rest timer component*/}
            <Timer />
            <div className='my-4'></div>
            {/* Stopwatch component */}
            <Stopwatch />
          </div>
        </div>
      </div>
    </>
  )
}

export default App;