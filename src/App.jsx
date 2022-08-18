import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Timer from './components/Timer';
import Stopwatch from './components/Stopwatch';
import { Data } from "./data";

const App = () => {
  const workout = Data.Routine.map(item => {
    return (
      <Nav key={item.day} name={item.day} workout={item.workout}/>
    )
  })

  return (
    <div className='container'>
      <Header data={Data.UserInfo}/>
      <div className='mt-3 d-md-flex'>
        <div className='container-fluid ps-0'>
          <h2>Select Workout</h2>
          {workout}
        </div>
        <div className='timer-container bubble col-lg-3 py-3'>
          <Timer />
          <div className='my-4'></div>
          <Stopwatch />
        </div>
      </div>
    </div>
  )
}

export default App;
