import React,{useState ,useEffect} from 'react'
import Error from "../Error/Error";
import Register from "../Register/Register";
import { Route, Switch } from "react-router-dom";
import Test from "../Test/Test";
import Instruction from "../Instruction/Instruction";
import Login from "../Login/Login";
import Admin from "../Admin/Admin";
import ProtectedRoutes from "../ProtectedRoutes.js/ProtectedRoutes";
// import  Feedback  from '../Feedback/feedback';

function Routes(props) {
  const[isAuth,setisAuth]=useState(false);
  const[isAdmin,setisAdmin]=useState(false);
  // useEffect(() => {
  //   return () => {
  //     axios.post('https://radiant-scrubland-91561.herokuapp.com/api/',{
  //       headers:{
  //       "Auth token" : `Bearer ${localStorage.getItem('token')}`
  //     },
  //   }).then(res => {
  //         console.log(res);
  //         alert(`${res.data}`);
  //         setisAuth(true);
  //     })
  //     .catch(err => {
  //         console.log(err);
  //         alert(`${err.data}`)
  //         setisAuth(false);
  //     });
  //   }
  // },[])
  
    return (
        <>
         <Switch>
           <Route exact path="/" component={Login} />
           {/* {localStorage.getItem('token')?<ProtectedRoutes path="/instruction" component={Instruction} isAuth={isAuth}/>:<Redirect to={"/"}/>} */}
           <ProtectedRoutes path="/instruction" component={Instruction} isAuth={isAuth}/>
           <ProtectedRoutes path="/test" component={Test} isAuth={isAuth}/>
           <Route path="/register" component={Register} />
           <ProtectedRoutes path="/admin" component={Admin} isAuth={isAdmin}/>
           {/* <Route path="/feedback" component={Feedback} /> */}
           <Route component={Error} />
         </Switch>
        </>
    )
}

export default Routes
