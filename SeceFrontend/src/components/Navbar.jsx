import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect} from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useRef } from 'react';
import Memo from '../../Memoization/Memo';

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
                    <li><Link to='/UseRef' className="link">UseRef</Link></li>
                    <li><Link to='/use-memo' className="link">UseMemo</Link></li>
                    <li><Link to='/use-context' className="link">Student</Link></li>
                    <li><Link to='/memo' className="link">Memo</Link></li>

                    <li><Link to='/' className="link" onClick={onLogout}>Logout</Link></li>
                </ol>
            </nav>
        </header>)
}

export default Navbar;