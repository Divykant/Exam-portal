// import React from 'react'
// import Questions from '../Question/Questions'
// import QNumbers from '../QuestionNumbers/QNumbers'
// import Topbar from '../Topbar/Topbar'
// import "./Test.css"
// import Testapi from '../testapi/Testapi'
// import Quesbar from '../quesbar/Quesbar'

// export default function Test() {

//   const Change ={backgroundcolor:"pink"}
//     return (
//         <>
//          <Topbar/>
//          <div className="testContainer">
//            <div className="qnumContainer">
//              {/* <QNumbers/> */}
//              <Quesbar colour={ Change }/>
//            </div>
//            <div className="questionsContainer">
//              {/* <Questions/> */}
//              <Testapi />
//            </div>
//          </div> 
//         </>
//     )
// }



import React, { useEffect, useState } from 'react'
import Questions from '../Question/Questions'
import QNumbers from '../QuestionNumbers/QNumbers'
import Topbar from '../Topbar/Topbar'
import "./Test.css"
import Testapi from '../testapi/Testapi'
import Quesbar from '../quesbar/Quesbar'
import axios from 'axios'
import Html from '../Html/Html'
import Aptitude from '../Aptitude/Aptitude'
import Css from '../Css/Css'
import PreLang from '../PreLang/PreLang'



export default function Test() {
  
  const [Users,setUsers]= useState([])
  const [index,setIndex]= useState("")
  
  useEffect(function(){
    axios.get("https://radiant-scrubland-91561.herokuapp.com/api/questions/search/html")
    .then(response => setUsers(response.data))
    .catch(error => console.log(error))
  },[]);
  
   const changequestion = (eventtarget)=>{
     console.log(eventtarget)
     setIndex(eventtarget)
   }
    return (
        <>
         <Topbar/>
         <div className="testContainer">
           <div className="qnumContainer">
             {/* <QNumbers/> */}
           <Quesbar onclickhandler = {changequestion}></Quesbar>
           </div>
           <div className="questionsContainer">
             {/* <Questions/> */}
             <Testapi  />
             {/* <Html />
             <Css/>
             <Aptitude/>
             <PreLang/> */}
           </div>
         </div> 
        </>
    )
}