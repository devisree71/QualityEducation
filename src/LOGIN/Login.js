import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./login.css";
const Login = () => {
  const navigate = useNavigate();
  return(
    <>
    <div className='b'>
        <h2 className='h'>LOGIN</h2>
        <input placeholder='Enter username' type="text" className='m' />
        <input placeholder="Enter Password" type="text" className='m'/>
         <button className='bn' type="submit" onClick={()=>{navigate("/App1")}}>LOGIN</button>
        <button className='bn' type="submit" onClick={()=>{navigate("/Reg1")}}>REGISTER</button>
    </div>
  </>
  )
};

export default Login;