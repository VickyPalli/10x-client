import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


const SignUp = ()=>{

    const [userName ,setUserName] = useState("");
    const [password ,setPassword] = useState("");

    const inputHandler = (inputType  , event)=>{
       if(inputType==="username"){
        setUserName(event.target.value)
       }else{
        setPassword(event.target.value)
       }
    }

    const buttonHandler = async()=>{
        axios.post('http://localhost:7003/signup',{userName ,password}).then((res)=>{
            alert(res.data)
        }).catch(()=>{
            alert('internal error....')
        })
    }
    return <div>
        <input type="text"  placeholder="plz enter username" onKeyUp={(event)=>inputHandler('username',event)} required/>
        <input type="text"  placeholder="plz enter password" onChange={(event)=>inputHandler('pass',event)} required/>
        <button onClick={()=>buttonHandler()}>signup</button>
        <Link to={'/'}>
            <button>Login from singup page</button>
        </Link>
    </div>
}

export default SignUp;