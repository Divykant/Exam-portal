import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import "../FontAwesomeIcons";
import { NavLink } from "react-router-dom";
import PasswordToggle from "../PasswordToggle/PasswordToggle";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login(props) {
  const [PasswordInputType, ToggleIcon] = PasswordToggle();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [allCandidate, setAllCandidate] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    if (email && password) {
      const newEntry = {
        StudentId: Number(email),
        Password: password,
      };
      // setAllCandidate([...allCandidate, newEntry]);
      // const user = { ...userLogin }
      axios.post('https://radiant-scrubland-91561.herokuapp.com/api/sign/Login', newEntry)
        .then(res => {
          console.log(res);
          if (res.data.token) {
            // const JWT = 'hello';
            const {token} = res.data;
            localStorage.setItem('token',token);
            console.log(token);
            // if(res.data.role === "Admin")
            // {
            //   props.history.push('/admin');
            // }
            // else{
            //   props.history.push('/instruction');
            // }
              props.history.push('/instruction');
          }
          else {
            toast.warn(`${res.data}`, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
          }
        })
        .catch(err => {
          toast.warn('Login Failed!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        });
      // console.log(allCandidate);
      // props.history.push('/instruction');
    }
    else {
        toast.error("Please Fill All Details", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
    }
  };

  return(
    <>
      <div className="maindiv">
        <div className="login_Leftside">
          <img className="login_img" src="assets/heading.svg" alt="Graphic" />
          <div className="form_area">
            <form onSubmit={submitForm}>
              <div className="registerArea">
              <div className="registerField">
                <img className="svg" src="assets/user.svg" />
                <input
                  type="text"
                  // minLength="13"
                  className="input"
                  placeholder="Roll Number"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="registerField">
                <img className="svg" src="assets/pass.svg" />
                <input
                  type={PasswordInputType}
                  className="input"
                  placeholder="Password"
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
                <span className="password-toogle-icon">{ToggleIcon}</span>
              </div>
              </div>
              <div className="lastdiv">
                <button type="submit" className="submit_button">
                  Login
                </button>
              </div>
            </form>
            <div className="lastdiv">
              <p className="lastLine">
                {" "}
                Not registered yet?
                <span id="register">
                  <NavLink to="/register">Register</NavLink>
                </span>
              </p>
            </div>
          </div>
          {/* <div>
                     {
                         allCandidate.map((currEntry)=>{
                               return(
                                   <div id={currEntry.id}>
                                      <p>{currEntry.email}</p>
                                      <p>{currEntry.password}</p>
                                   </div>
                               )
                         })
                     }
                 </div> */}
        </div>
        <div className="img_Righside">
          <img className="girl_img" src="assets/illustration2.png" alt="Graphic" />
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Login;
