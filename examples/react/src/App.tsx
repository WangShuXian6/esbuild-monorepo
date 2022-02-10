import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import {a} from 'airmusic-com-a'

// import 'airmusic-com-ui-css/dist/index.css'
// import {Ui} from 'airmusic-com-ui-css'

// import 'airmusic-com-ui/dist/index.css' //errror
// import {Ui} from 'airmusic-com-ui' //error

import {Ui} from 'airmusic-com-ui-module'

function App() {
  a()
  return (
    <div className="App">
      <Ui />
      {/* <Ui title={'demo'}/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
