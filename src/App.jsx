// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="drum-machine" id="drum-machine">
        <div className="drum-pad">
          <div className="drum-pad" id="Heater-1">Q</div>
          <div className="drum-pad" id="Heater-2">W</div>
          <div className="drum-pad" id="Heater-3">E</div>
          <div className="drum-pad" id="Heater-4">A</div>
          <div className="drum-pad" id="Clap">S</div>
          <div className="drum-pad" id="Open-HH">D</div>
          <div className="drum-pad" id="Kick-n-hat">Z</div>
          <div className="drum-pad" id="Kick">X</div>
          <div className="drum-pad" id="Closed-HH">C</div>
        </div>
        <p id="display">aqui va el display</p>
      </div>
    </>
  )
}

export default App
