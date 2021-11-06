import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Category from "../Category/Category";


export default function Html() {


    const [users, setUsers] = useState([]);

    useEffect(function(){
        axios.get("https://radiant-scrubland-91561.herokuapp.com/api/questions/search/html")
        .then(response => {
            console.log(response)
            setUsers(response.data)
        })
        .catch(error => console.log(error))
    },[]);


    return (
        <div>
            <div className="categoryContainer">
                 <Category/>
           </div>
           <div>
           {
                    users.map((user) => (
                        <>
                        <div className="quesdiv">
                                 Ques-{user.Question.Title}
                        </div>

                        <div className="option-div">
                            {
                                user.Options.map((option)=>(
                                      <div>
                                            <input name="option" type="radio" className="optionInput" value="1"/>
                                            <label for="option1">{option.title}</label>
                                      </div>
                                  ))}
                        </div>
                        </>
                    ))}
           </div>
        </div>
    )
}



