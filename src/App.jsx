// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="drum-machine" id="drum-machine">
        <div className="drum-pad">
          <div className="drum-pad" id="Heater-1">
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip" id="Q"></audio>
            Q
          </div>

          <div className="drum-pad" id="Heater-2">
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className="clip" id="W"></audio>
            W
          </div>

          <div className="drum-pad" id="Heater-3">
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className="clip" id="E"></audio>
            E
          </div>

          <div className="drum-pad" id="Heater-4">
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className="clip" id="A"></audio>
            A
          </div>

          <div className="drum-pad" id="Clap">
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className="clip" id="S"></audio>
            S
          </div>

          <div className="drum-pad" id="Open-HH">
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className="clip" id="D"></audio>
            D
          </div>

          <div className="drum-pad" id="Kick-n-hat">
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className="clip" id="Z"></audio>
            Z
          </div>

          <div className="drum-pad" id="Kick">
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className="clip" id="X"></audio>
            X
          </div>

          <div className="drum-pad" id="Closed-HH">
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className="clip" id="C"></audio>
            C
          </div>
        </div>
        <p id="display">aqui va el display</p>
      </div>
    </>
  )
}

export default App
