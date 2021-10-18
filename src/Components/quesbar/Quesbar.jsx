import userEvent from '@testing-library/user-event';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "./Quesbar.css";
import { display } from '@mui/system';


export const Quesbar = () => {

    
    const [users, setUsers] = useState([]);
    const [singleusers, setSingleUsers] = useState([]);

    
    useEffect(function(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => setUsers(response.data))
        .then((error) => console.log(error));
    },[]);


    const singleques=(e)=>{
        // alert(e.target.value);


        axios.get("https://jsonplaceholder.typicode.com/users/" + e.target.value)
        .then((response) => setSingleUsers(response.data))
        .then((error) => console.log(error));
    };
    

    
    var count=0;

    function Visted(){
        
    }
    function NotVisted(){
    }
    function Marked(){
        
    }




    return (
        <div className="first">
            <div className="second">
            {users.map((user)=>(
                <button className="numbox" onClick={singleques}> {user.id} </button>
            ))
                }

            </div>
            <hr/>
            <div className="buttondiv">
                <span className="countbtn"><button className="visbtn"> 5 </button> visted
                 {()=>Visted()}</span><br/><br/>
                <span className="countbtn"><button className="notvisbtn"> 5 </button> Not visted 
                {()=>NotVisted()}</span><br/><br/>
                <span className="countbtn"> <button className="markbtn"> 5 </button> Marked for review
                {()=>Marked()}</span><br/><br/>
            </div>
        </div>
    )
}
export default Quesbar;