import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
export const BASE_URL = "http://localhost:5133/";

function App() {
  const foo = () => {
    axios.get("http://localhost:5133/api/NewResumes")
            .then(res => {
                console.log(res)              
            })
            .catch(err => console.log(err))
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={foo} className="App-link" target="_blank" rel="noopener noreferrer">
          Console data
        </button>
      </header>
    </div>
  );
}

export default App;
