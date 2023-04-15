import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import './App.css';

import Dashboard from "./components/Dashboard";
import Products from "./components/Products";



function App() {
  return (
    
    // <h1 className="text-6sxl font-bold underline">
    //   hello Dashboard
    // </h1> 
    <Router>
    <Routes>
      {/* <Route path="/" element={<Layout/>}></Route> */}
      <Route index element={<Dashboard/>}></Route>
      {/* <Route path="products" element={<Products/>}></Route> */}
      
    </Routes>
    </Router>
    )
}

export default App;
