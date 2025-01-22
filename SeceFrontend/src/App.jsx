import Home from "./components/Home";
import About from "./components/About";
import ClassComp from "./components/ClassComp";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import UseState from "./components/Hooks/useState";
import Signup from "./components/Signup";
import UseEffect from "./components/Hooks/UseEffect";
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() { 
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path="/Gallery" element={<Gallery image="SECE logo" page="Gallery"/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/use-state" element={<Contact />}></Route>
          <Route path="/Signup" element={<Signup/>}></Route>
          <Route path="/UseState" element={<UseState/>}></Route>
          <Route path="/UseEffect" element={<UseEffect/>}></Route>
          {/* <Route path="/use-api" element={<UseEffectAPI/>}></Route> */}
            </Routes>
    </BrowserRouter>
        )
  }
  
  export default App;
