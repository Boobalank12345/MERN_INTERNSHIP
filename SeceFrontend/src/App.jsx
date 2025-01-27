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
import UseRef from "./components/Hooks/UseRef";
import UseMemo from "./components/Hooks/UseMemo";
import UseCallback from "./components/Hooks/UseCallback";
import ReactLifecycleMethods from "./components/ReactLifeCycleMethods";
import { useContext } from "react";
import Student from "./components/Hooks/Student";
import Memo from "../Memoization/Memo";
import UpdateNumber from "../Memoization/UpdateNumber";
import UpdateText from "../Memoization/UpdateText";
import HOC from "./components/HOC/HOC";
import Button from "./components/HOC/Button";
import trackingButtonComponent from "./components/HOC/TrackingButtonComponent";
function App() { 
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/react-lifecycle-methods" element={<ReactLifecycleMethods/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Gallery" element={<Gallery image="SECE logo" page="Gallery"/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/use-state" element={<Contact />}></Route>
          <Route path="/Signup" element={<Signup/>}></Route>
          <Route path="/UseState" element={<UseState/>}></Route>
          <Route path="/UseEffect" element={<UseEffect/>}></Route>
          <Route path="/use-ref" element={<UseRef/>}></Route>
          <Route path="/use-memo" element={<UseMemo/>}></Route>
          <Route path="/use-call" element={<UseCallback/>}></Route>
          <Route path="/use-context" element={<Student/>}></Route>
          <Route path="/memo" element={<Memo/>}></Route>
          <Route path="/update-number" element={<UpdateNumber/>}></Route>
          <Route path="/update-text" element={<UpdateText/>}></Route>
          <Route path="/HOC" element={<HOC/>}></Route>
          <Route path="/button" element={<Button/>}></Route>
          <Route path="/tracking-button" element={<trackingButtonComponent/>}></Route>
          
          {/* <Route path="/use-api" element={<UseEffectAPI/>}></Route> */}
            </Routes>
    </BrowserRouter>
        );
  };
  export default App;
