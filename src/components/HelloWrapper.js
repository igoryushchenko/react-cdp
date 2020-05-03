import React from 'react';

// 1. React.CreateElement
const Hello = React.createElement('h1', null, 'Hello from React');

export default class HelloWrapper extends React.Component{
  render(){
    return Hello
  }
}