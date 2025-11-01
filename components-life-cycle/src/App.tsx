import React from 'react';
import logo from './logo.svg';
import './App.css';
import LifeCycleDemo from './ClassLifeCycleDemo';
import FunctionalLifeCycle from './FunctionalLifeCycleDemo';
import PostList from './PostAxios';

function App() {
  return (
    <div className="App">
      <LifeCycleDemo />
      <FunctionalLifeCycle />
      <PostList />
    </div>
  );
}

export default App;
