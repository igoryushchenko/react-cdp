import React from 'react';
import HelloWrapper from './components/HelloWrapper';
import HelloComponent from './components/HelloComponent';
import HelloPure from './components/HelloPure';
import HelloFunctional from './components/HelloFunctional';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HelloWrapper/>
        <HelloComponent/>
        <HelloPure/>
        <HelloFunctional value='Hello from React Functional Component'/>
      </React.Fragment>
    );
  }
}