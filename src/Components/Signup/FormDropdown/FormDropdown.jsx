import React, { useContext } from 'react'
import { useRef, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import "./FormDropdown.css"
import MainContext from '../../Store/MainContext';
import { db } from "../../../FireBase"
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

const FormDropdown = () => {
    const navigate = useNavigate()
    const MainCtx = useContext(MainContext)
    //Storing Login Form Data
    const [, setLoginFromData] = useState('')
    //Storing Signup Form Data
    const [, setSignupFromData] = useState('')
    //Login Form Ref (for getting data from form input fields)
    const loginform = useRef();
    //Function for login form data
    const loginData = (data) => {
        data.preventDefault();
        const email = loginform.current.email.value;
        const password = loginform.current.password.value;
        const checkbox = loginform.current.checkbox.value;
        setLoginFromData({ email, password, checkbox })
        MainCtx.LoginData({ email, password, checkbox })
        LoginFunctionCall({ email, password, checkbox})
        
    }
    //Function for login form data
    const LoginFunctionCall = async (data) => {
        const docref = doc(db, "User", data.email);
        const docdata = await getDoc(docref);
        if (docdata.exists()) {
            if (docdata.data().password === data.password) {
                console.log("Succeess")
                const { email } = data
                localStorage.setItem("LoginData", JSON.stringify({ email }))
                navigate('/Account', { replace: true });
                MainCtx.SetAlert({msg: "Login Successfull", type:"success"})
                setTimeout(() => {
                    MainCtx.SetAlert({msg: '', type: ''})
                }, 5000);
            }
            else {
                MainCtx.SetAlert({msg: "Login Failed", type:"danger"})
                setTimeout(() => {
                    MainCtx.SetAlert({msg: '', type: ''})
                }, 5000);
            }
            console.log("Document data:", docdata.data().password);
        }
        else {
            MainCtx.SetAlert({msg: "User Not Registered", type:"danger"})
            setTimeout(() => {
                MainCtx.SetAlert({msg: '', type: ''})
            }, 5000);
        }
    }
    //Signup Form Ref (for getting data from form input fields)
    const signupform = useRef();
    //Function for signup form data
    const signupData = (data) => {
        data.preventDefault();
        const name = signupform.current.name.value;
        const number = signupform.current.number.value;
        const email = signupform.current.email.value;
        const password = signupform.current.password.value;
        const repassword = signupform.current.repassword.value;
        const checkbox = signupform.current.checkbox.value;
        const username = signupform.current.username.value;
        setSignupFromData({ name, number, email, password, repassword, checkbox, username })
        MainCtx.SignupData({ name, number, email, password, repassword, checkbox, username })
        SignupFunctionCall({ name, number, email, password, repassword, checkbox, username })
        // MainCtx.SignupFunctionCall()
    }
    //Function for signup form data
    const SignupFunctionCall = async (data) => {
        const docref = doc(db, "User", data.username)
        await setDoc(docref, { username: data.username, name: data.name, password: data.password, email: data.email, phoneno: data.number })
        navigate('/Account', { replace: true });
        MainCtx.SetAlert({msg: "User Register", type:"success"})
        setTimeout(() => {
            MainCtx.SetAlert({msg: '', type: ''})
        }, 5000);
    }
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Old User ..? Login here 👀</Accordion.Header>
                <Accordion.Body>
                    <p style={{ textAlign: "center" }}>We Missed U ... 🥺🥺</p>
                    <form action='' ref={loginform} onSubmit={loginData} >
                        <div className="mb-3">
                            <label htmlFor="loginexampleInputEmail1" className="signup-form-label">User Name</label>
                            <input type="text" name='email' className="form-control" id="loginexampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="signup-form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="loginexampleInputPassword1" className="signup-form-label">Password</label>
                            <input type="password" name='password' className="form-control" id="loginexampleInputPassword1" />
                        </div>
                        <div className="mb-3 signup-form-check">
                            <input type="checkbox" required name='checkbox' className="form-check-input" id="loginexampleCheck1" />
                            <label className="signup-form-check-label" htmlFor="loginexampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>New User ..? Lets create your account 🤓</Accordion.Header>
                <Accordion.Body>
                    <p style={{ textAlign: "center" }}>Welcome to KhanSama ... 🥳🥳</p>
                    <form action='' ref={signupform} onSubmit={signupData} >
                        <div className="mb-3">
                            <label htmlFor="exampleName" className="signup-form-label">Name</label>
                            <input type="text" name='name' className="form-control" id="exampleName" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleUserName" className="signup-form-label">User Name</label>
                            <input type="text" name='username' className="form-control" id="exampleUserName" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="examplePh-number" className="signup-form-label">Phone Number</label>
                            <input type="number" name='number' className="form-control" id="examplePh-number" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="signup-form-text">Don't Worry Your Phone Number is safe With us !!</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="signup-form-label">Email address</label>
                            <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="signup-form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="signup-form-label">Password</label>
                            <input type="password" name='password' className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputRe-Password1" className="signup-form-label">Re-enter Password</label>
                            <input type="password" name='repassword' className="form-control" id="exampleInputRe-Password1" />
                        </div>
                        <div className="mb-3 signup-form-check">
                            <input type="checkbox" required name='checkbox' className="form-check-input" id="exampleCheck1" />
                            <label className="signup-form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default FormDropdown
