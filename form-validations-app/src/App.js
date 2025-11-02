import logo from './logo.svg';
import './App.css';
import MyInput from './MyInput';
import MyForm from './MyForm';
import CustomForm from './CustomForm';
import FormWithErrors from './FormWithErrors';

function App() {
  return (
    <div className="App">
      <MyInput label="Name:" />
      <MyForm />
      <CustomForm />  
      <FormWithErrors />
    </div>
  );
}

export default App;
