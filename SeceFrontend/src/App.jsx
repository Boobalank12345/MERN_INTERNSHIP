import Home from "./components/Home";
import About from "./components/About";
import ClassComp from "./components/ClassComp";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
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
        </Routes>
    </BrowserRouter>
        )
  }
  
  export default App;