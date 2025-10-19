import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './button.css'
import Button from './button';
import Cards from './Cards';
import MyClassComponent from './MyClassComponent';

function App() {
  return (
    <>
    <h1>Details</h1>
      <Button name="D" />
      <Button name="E" />
      <Button name="T" />
      <Button name="A" />
      <Button name="I" />
      <Button name="L" />
      <Button name="S" />
      
      <Cards name="rishi" age={20} phoneNumber="2322435" />
      <Cards name="vikky" age={22} phoneNumber="45325354" />
      <Cards name="dakshi" age={20} phoneNumber="2436474" />
      <Cards name="upsi" age={2} phoneNumber="6542326" />
      <MyClassComponent />
          </>
  );
}

export default App;
