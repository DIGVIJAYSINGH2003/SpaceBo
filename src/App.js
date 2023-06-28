import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Space from "./components/Space";
import Home from "./pages/Home";
import {Box} from "@mui/material"
import spacee from "./assets/spacee.jpeg"
import Art from "./pages/Art";
import Error from "./pages/Error";
function App() {
  
  return (

    <Router>
      
         <Space></Space>
     <Routes>
      <Route path ="/" exact element ={<Home></Home>}></Route>
      <Route path ="/search/:searchTerm" element ={<Art></Art>}></Route>
      <Route path ="*" element={<Error></Error>}></Route>
     </Routes>
     
    </Router>

      
     
  );
}

export default App;
