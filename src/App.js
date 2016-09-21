const React = require('react');
import logo from './images/logo.svg';
import './App.css';

const App = React.createClass ({
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <h1>Welcome to React</h1>
        <p className="App-intro">
          I have no idea where this will lead us,<br /> but I have a definite feeling it will be a place both wonderful and strange.
        </p>
      </div>
    );
  }
});

module.exports = App