import Dashboard from "./components/Dashboard";
// import Home from "./components/Home";
import Login from "./components/Login"
import Signup from "./components/Signup"
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { createContext, useState } from "react";




function App() {
  
  
  const [choice, setchoice] = useState();


  return (
  
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login/>}/>
        <Route  path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}



export default App
