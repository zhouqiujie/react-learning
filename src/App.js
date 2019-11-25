import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';

function App(props) {
  return (
    <Provider store={store}>
      <div className="App">
        {props.children}
      </div>
    </Provider>
  );
}

export default App;
