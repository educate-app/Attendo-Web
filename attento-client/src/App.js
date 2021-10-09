import {useState} from "react"
import './App.css';
import Hero from "./Hero";
import Login from './Login.js';




const App = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [log, setLog] = useState(false)

  
  return (
    <div className="App">
    {log ? (
      <Hero setLog={setLog} log={log} />
    ):(
      <Login email={email} setEmail={setEmail} password={password} setPassword = {setPassword} log={log} setLog= {setLog}/> 
    )
    }
      
    </div>
  );
}

export default App;
