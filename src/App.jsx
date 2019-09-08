import React, { Component } from 'react';
import './App.css';

import { NotifyContainer, notifyManager } from './NotifyManager'; 

class App extends Component {

  componentDidMount = () => {
  }

  render() {
    return (
      <div>
        <button onClick={() => notifyManager.danger({title: 'danger', message: 'Lorem ipsum dolor'})}>Danger</button>
        <button onClick={() => notifyManager.success({title: 'success', message: 'Lorem ipsum dolor'})}>Success</button>
        <button onClick={() => notifyManager.warning({title: 'warning', message: 'Lorem ipsum dolor'})}>Warning</button>
        <button onClick={() => notifyManager.info({title: 'info', message: 'Lorem ipsum dolor'})}>Info</button>
        <button onClick={() => notifyManager.custom({title: 'custom', message: 'Lorem ipsum dolor'})}>Custom</button>
        <NotifyContainer />
      </div>
    );
  }
}

export default App;
