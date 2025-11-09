import logo from './logo.svg';
import './App.css';
import MyInput from './MyInput';
import MyForm from './MyForm';
import CustomForm from './CustomForm';
import FormWithErrors from './FormWithErrors';
import CustomHook from './CustomHook';

function App() {
  return (
    <div className="App">
      <MyInput label="Name:" />
      <MyForm />
      <CustomForm />  
      <FormWithErrors />
      <CustomHook />
    </div>
  );
}

export default App;
