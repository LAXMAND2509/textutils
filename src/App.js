
import React, { useState, Component } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextFrom.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [modeText, setmodeText] = useState('dark');

  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setmodeText('light');
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark mode has been enables", "success");
      document.title = "TextUtiles - Home - Dark mode";
    }
    else {
      setMode('light');
      setmodeText('dark');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enables", "success");
      document.title = "TextUtiles - Home - Light mode";
    }
  }
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
      <Router>
        {/* <Navbar title = "TextUtils2" about = "About TextUtils"/> */}
        {/* <Navbar /> */}
        <Navbar title='TextUtils' mode={mode} modeText={modeText} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert}></Alert>
        <div className="container my-3">
        {/* <About/> */}
        <Routes>
          <Route exact path="/about"element = {<About/>} >
          </Route>
          <Route exact path="/" element ={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />}>
          </Route>
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
