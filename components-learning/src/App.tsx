import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonCheckComponent from './buttonCheck';
import IncrementComponent from './IncrementComponent';
import ClassCounter from './ClassComponent';
import DataBindingComponent from './DataBindingComponent';
import ParentComponent from './ParentComponent';
import WelcomeMessage from './WelcomeMessage';
import Greeting from './Greeting';
import ConditionalRendering from './ConditionalRendering';
import ArrayTraversal from './ArrayTraversal';

function App() {
  return (
    <div className="App">
      <ButtonCheckComponent />
      <IncrementComponent />
      <ClassCounter />
      <DataBindingComponent />
      <ParentComponent />
      <WelcomeMessage />
      <Greeting isLoggedIn={true} isAuthorized={true}/>
      <ConditionalRendering isLoggedIn={false} />
      <ArrayTraversal />
    </div>
  );
}

export default App;
