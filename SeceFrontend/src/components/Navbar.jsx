import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect} from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useRef } from 'react';
import Memo from '../../Memoization/Memo';
import UpdateNumber from '../../Memoization/UpdateNumber';
import UpdateText from '../../Memoization/UpdateText';
import HOC from './HOC/HOC';
import Button from './HOC/Button';
import trackingButtonComponent from './HOC/TrackingButtonComponent';
const Navbar = ({ onLogout }) => {

    var [dropdown, showDropdown] = useState(false)
    const toggleDropdown=()=>{
        showDropdown(dropdown=>!dropdown);
    }

    return (
        <header>
            <nav>
                <ol>
                    <li><Link to='/' className="link">Home</Link></li>
                    <li><Link to='/About' className="link">About</Link></li>
                    <li><Link to='/Gallery' className="link" >Gallery</Link></li>

                    <li><Link to='/Contact' className="link">Contact</Link></li>
                    <div>
                        <span onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>Hooks</span>
                        {dropdown && (<ul>
                            <li>useState</li>
                            <li>useEffect</li>
                        </ul>)}
                    </div>
                    <li><Link to='/react-lifecycle-methods' className="link">React Lifecycle Methods</Link></li>
                    <li><Link to='/UseState' className="link">UseState</Link></li>
                    <li><Link to='/UseEffect' className="link">UseEffect</Link></li>
                    <li><Link to='/signUp' className="link">SignUp</Link></li>
                    <li><Link to='/Login' className="link">Login</Link></li>
                    <li><Link to='/use-ref' className="link">UseRef</Link></li>
                    <li><Link to='/use-memo' className="link">UseMemo</Link></li>
                    <li><Link to='/use-context' className="link">Student</Link></li>
                    <li><Link to='/memo' className="link">Memo</Link></li>
                    <li><Link to='/update-number' className="link">UpdateNumber</Link></li>
                    <li><Link to='/update-text' className="link">UpdateText</Link></li>
                    <li><Link to='/HOC' className="link">HOC</Link></li>
                    <li><Link to='/Button' className="link">Button</Link></li>
                    <li><Link to='/tracking-button' className="link">TrackingButtonComponents</Link></li>
                    


                    <li><Link to='/' className="link" onClick={onLogout}>Logout</Link></li>
                </ol>
            </nav>
        </header>)
}

export default Navbar;