import React, { Component } from 'react';
import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div>
        <LoginPage />
      </div>
    );
  }
}

export default App;
