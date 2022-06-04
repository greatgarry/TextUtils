import './App.css';
import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
function App() {
  const [mode, setMode] = useState('light');
  function modeSwitch() {
    if (mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Router>
      <Navbar title='TextUtils' aboutText='About Us' mode= {mode} modeSwitch={modeSwitch} />
      <div className="container my-5">
      <Switch>
          <Route path="/about">
            <About mode= {mode} />
          </Route>
          <Route path="/">
        <TextForm heading='Enter the text to analyze below' mode= {mode} />
          </Route>
        </Switch>
      </div>
        </Router>
        </>
  );
}

export default App;
