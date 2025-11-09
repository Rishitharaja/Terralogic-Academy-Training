import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: "center"}}>Redux Toolkit Demo</h1>
      <Counter />
    </div>
  );
}

export default App;
