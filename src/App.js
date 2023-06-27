import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Space from "./components/Space";
import Home from "./pages/Home";
import {Box} from "@mui/material"
import spacee from "./assets/spacee.jpeg"
function App() {
  
  return (

    <Router>
      
         <Space></Space>
     <Routes>
      <Route path ="/" exact element ={<Home></Home>}></Route>
     </Routes>
     
    </Router>

      
     
  );
}

export default App;
