import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Rahul'
    };
  }

  render() {
    return (
      <div>
        <div class ="login">
         <p><Hello name={this.state.name} /></p>
        <input type = "text" name ="user" id = "user" placeholder = "Enter Username or Email" autocomplete = "false"></input>
        <input type = "password" name ="password" id = "password" placeholder = "Enter Password"></input>
        <input type = "submit" name ="action" id = "action"></input>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
