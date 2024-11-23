import './App.css';
import InputForms from './molecule/InputForms.jsx';
import {useState} from 'react';
import { FormContext } from './hooks/useForm.jsx';

const App =()=> {
  
  const [system,setSystem] = useState("未入力")
  const [user,setUser] = useState("未入力")
  return (
    
      <FormContext.Provider value = {{system,user,setSystem,setUser}}>
      <div className="App">
        <header className="App-header">
          <h1 style ={{color:"white"}}>ChatGPTプロンプト調査</h1>
          <h5 style ={{color:"white"}}>ここで入力いただいた値は、データベースに保存されます。</h5>
          <InputForms/>
        </header>
      </div>
      </FormContext.Provider>
     
  );
}

export default App;
