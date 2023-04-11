import Navbar from "./components/Navbar";
import { BrowserRouter as Router ,Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import './App.css'
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {


  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
<Footer/>
      </Router>
    </div>
  );
}

export default App;
//https://www.youtube.com/watch?v=PHgVKB1IMpU
//57.dk