/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import Container from './Container';
import store from "./src/store";

import React from 'react'
import { Component } from 'react';
import { Provider } from 'react-redux';
import { subscribeRecord , lastRecord} from './src/until/subscribe';
import states from './src/control/states';

 subscribeRecord(store)
 export default class App extends Component {
   componentDidMount() {
     lastRecord()
     states.init()
   }
   
    render() {
      return (
        <Provider store={store}>
            <Container></Container>
        </Provider>
      );
    }
  }


