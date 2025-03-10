import React,{useState} from 'react'
import axios from "axios"; 
// import {Redirect} from 'react-router-dom';
import "./Instruction.css"
// import {NavLink} from "react-router-dom"
import { withRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Instruction(props) {
  const [category,setCategory]=useState("");

  const postLanguage=()=>{
    if (category) {
      axios.put('https://radiant-scrubland-91561.herokuapp.com/api/users/instruction',{
        headers:{
        "Auth token" : `Bearer ${localStorage.getItem('token')}`
      },
      category 
    }).then(res => {
          toast.success(`${res.data}`);
          console.log(res);
          props.history.push('/test');
      })
      .catch(err => {
        toast.error(`${err.data}`);
      });
    }
    else {
      toast.warn('Please Select a Language!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  }

  return(
  <>
  <div className="topmost">
  <div className="headingCont">
    <h1 className="top_heading">CINE'21 </h1>
    <h2 className="sub_heading">Instructions </h2>
    <div className="line_"><div className="line"></div></div>
  </div>
     <div className="main_div">
       <div className="home_div">
       
         <p className="home_p">
         <ul className="home_ul">
            <li className="home_li">This exam contains 4 mandatory categories namely as HTML, CSS, APTITUDE and SQL.</li>
            <li className="home_li">However, the candidate can select a choice of language(category) from the dropdown below.</li>
            <li className="home_li">This exam will be of 60 minutes in duration. When you submit the test/run out of time all your marked responses whether saved or not will be submitted.</li>
            <li className="home_li">For ever correct answer the candidate will be awarded 1 mark.</li>
            <li className="home_li">For every question, you can either SAVE or MARK FOR REVIEW for the response.</li>
            <li className="home_li">A question once attempted cannot be left unanswered as there is <span className="home_span" >NO NEGATIVE MARKING</span> in this test.</li>
            <li className="home_li">You can end the test anytime by clicking on the submit button. Make sure you submit only when you are done.</li>
            <li className="home_li">Once done submitting the test you'll be redirected to a feedback form. Your participation will only be considered once submit your feedback from.</li>
            <li className="home_li"><span className="home_span" >If the candidate tries to do any malicious activity, he/she shall be actomatically disqualified.</span></li>
            <li className="home_li">Before starting the test please make sure you have a stable internet connection.</li>
            <li className="home_li"><span className="home_span" >Kindly take note that this test allows only a single login for a user, so any kind of disconnection
             or reloading of the page might log you out of the test.</span></li> <br />
        </ul>
        </p>
        <div className="langSection">
        <span className="lastspan">Choose a language according to your prefernce</span>
        <div className="registerFields">
            <select value={category} onChange={(event) =>{setCategory(event.target.value)}}>
                <option value="0">Language</option>
                <option value="C++">C++</option>
                <option value="C">C</option>
                <option value="Java">Java</option>
                <option value="Python">Python</option>
            </select>    
        </div>
        <button type="submit" className="home_submit" onClick={postLanguage}>Start Your Exam</button>
    </div>
    </div>
    </div>  
    </div>
    <ToastContainer />
  </>
  );
}


export default withRouter(Instruction);

{/* <NavLink to={"/test/" + language}>Start Your Exam</NavLink> */}