import { Link } from "react-router-dom"
import "./../css/signUp.css"
import { useState } from "react"
const Signup=()=>{
    var[firstname,setFirstname]=useState("");
    var[lastname,setlastname]=useState("");
    var[username,setusername]=useState("");
    var[email,setemail]=useState("");
    var[password,setpassword]=useState("");
    const handleSignup=()=>{
        console.log("Event Triggered")
    }
    return (
    
        <div className="signup">
            <form>
                <div className="input">
                    <label htmlFor="FirstName">FirstName</label>
                    <input type="text" name="name" placeholder="enter your name"/>
                </div>
                <div className="input">
                    <label htmlFor="LastName">LastName</label>
                    <input type="text" name="name" placeholder="enter your name"/>
                </div>
                <div className="input">
                    <label htmlFor="UserName">UserName</label>
                    <input type="text" name="name" placeholder="enter your name"/>
                </div>
                    <div className="input">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" placeholder="enter your email" />
                </div>
                <div className="input">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" placeholder="enter your password"/>
                    
                </div>
                <Link to='/home' className="button">Signup</Link>
            </form>
        </div>
        
    )
}
export default Signup;