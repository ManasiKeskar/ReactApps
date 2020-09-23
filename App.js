import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import ColorChangeButton from './ColorChangeButton';

function App() {
  const [color, setColor] = useState('');
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    //<h1>Hello World!</h1>
    <div className={`react-root ${color}`}>
      <div className='centered'>
        <h1>Color Picker</h1>
        <ColorChangeButton color='red' setColor={setColor} />
        <ColorChangeButton color='blue' setColor={setColor} />
        <ColorChangeButton color='yellow' setColor={setColor} />
        {/* <button className='red' onClick={() => setColor('red')}>red</button>
        <button className='blue' onClick={() => setColor('blue')}>blue</button>
        <button className='yellow' onClick={() => setColor('yellow')}>yellow</button> */}
      </div>
    </div>
  );
}

export default App;
