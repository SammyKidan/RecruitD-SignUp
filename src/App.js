import React, { Component } from 'react';
import SignUpForm from './pages/SignUpForm';
import LogoPage from './pages/LogoPage';
import './App.css';


class App extends Component {
  render() {
    return (
      
        <div className="App">
          <div className="wrapper">
                <LogoPage />
                <SignUpForm/>
            </div>
        </div>
    );
  }
}

export default App;
