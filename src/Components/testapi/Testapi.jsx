import React, { useState, useEffect, createContext } from 'react'
import "./Testapi.css";
import axios from 'axios';
import $ from "jquery";
import Category from "../Category/Category";
import { colors } from '@material-ui/core';
import Quesbar from '../quesbar/Quesbar';
import { create } from '@mui/material/styles/createTransitions';

function Testapi () {

    const [users, setUsers] = useState([]);

    useEffect(function(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => setUsers(response.data))
        .then(error => console.log(error))
    },[]);


    // const singleusers = props => {
    //     console.log(props)
    //     {
    //         users.map((user) => (
    //             <div className="second-div"> 
    //                  <div className="third">
    //                     <div className="quesdiv"> Q-{user.id}   {user.name}</div>
    //                      <div className="option">
    //                          {/* <span>Q- {user.id} </span>
    //                          <p>{user.name}</p> */}
    //                          <input name="option" type="radio" className="optionInput" value="1"/>
    //                          <label for="option1">{user.username}</label>
    //                      </div>
                         
                         
    //                      <div className="option">
    //                          <input name="option" type="radio" className="optionInput" value="1"/>
    //                          <label for="option1">{user.email}</label>
    //                      </div>

    //                      <div className="option">
    //                          <input name="option" type="radio" className="optionInput" value="1"/>
    //                          <label for="option1">{user.address.street}</label>
    //                      </div>

    //                      <div className="option">
    //                          <input name="option" type="radio" className="optionInput" value="1"/>
    //                          <label for="option1">{user.address.suite}</label>
    //                      </div> 
    //                  </div> 
    //              </div>
    //         ))}
        
    // }

    var visDiv=0;
    
    function displayDiv(){
        $(".third").hide();
        $(".third:eq("+ visDiv +")").show();
    }
    displayDiv()

    function NextQ() {
        if(visDiv == $(".third").length-1){
            visDiv=0;
        }
        else{
            visDiv ++;
        }
        displayDiv();
    }

    function PrevQ() {
        if(visDiv == 0){
            visDiv=$(".third").length-1;
        }
        else{
            visDiv --;
        }
        displayDiv();
    }


    function Markfor() {}
    // = createContext();


    return (

            
        <div className="main-div">
           <div className="categoryContainer">
                <Category/>
           </div>
               {
                   users.map((user) => (
                       <div className="second-div"> 
                            <div className="third">
                            <div className="quesdiv">
                                Ques-{user.id})   {user.name}
                             </div>
                                <div className="option">
                                    {/* <span>Q- {user.id} </span>
                                    <p>{user.name}</p> */}
                                    <input name="option" type="radio" className="optionInput" value="1"/>
                                    <label for="option1">{user.username}</label>
                                </div>
                                
                                
                                <div className="option">
                                    <input name="option" type="radio" className="optionInput" value="1"/>
                                    <label for="option1">{user.email}</label>
                                </div>

                                <div className="option">
                                    <input name="option" type="radio" className="optionInput" value="1"/>
                                    <label for="option1">{user.address.street}</label>
                                </div>

                                <div className="option">
                                    <input name="option" type="radio" className="optionInput" value="1"/>
                                    <label for="option1">{user.address.suite}</label>
                                </div> 
                            </div> 
                        </div>
                   ))}
                   <div className="btndiv">
                    <button onClick={PrevQ} className="lastbtns" id="pre">Previous</button>
                   <button   onClick={()=>Markfor()} className="lastbtns" id="mrk">Mark for review</button>
                   <button onClick={NextQ} className="lastbtns" id="nxt">Next</button>
                   </div>
                    
        </div>
    );
}

export default Testapi;
