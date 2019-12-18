import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage'; 

function App() {
  return (
    <Router>
      <div className="App">
      <Route exact path="/" render={props => (
          <React.Fragment>
            <LoginPage />
          </React.Fragment>
        )}/>
        <Route path="/main" render={props => (
          <React.Fragment>
            <MainPage />
          </React.Fragment>
        )}/>
      </div>
    </Router>
  );
}

export default App;
