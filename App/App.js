/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './Reducers/index';
import CounterAction from './Actions/CounterAction';

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Provider store={store}>
        <CounterAction />
      </Provider>
    )
  }
}


export default App;
