
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Login from './login';
import SignUp from './singup';
import Home from './home';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
