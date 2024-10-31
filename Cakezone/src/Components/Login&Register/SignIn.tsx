import { useContext, useRef, useState } from 'react'
import './SignIn.css'
import { AppContext } from '../../Layouts/ContextProvider';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

    const activeCustomer = useContext(AppContext);
    let navigate = useNavigate();
    
    let [usernameErrorMessage,setUsernameErrorMessage] = useState("");
    let [passwordErrorMessage,setPasswordErrorMessage] = useState("");

    let username:any = useRef();
    let password:any = useRef();

    function login(){
        if(username.current.value==activeCustomer.username){
            setUsernameErrorMessage("")
            if(password.current.value == activeCustomer.password){
                localStorage.setItem("ActiveCustomer",username.current.value);
                setPasswordErrorMessage("")
                window.alert("You are now logged In!");
                navigate('/');
            }else{
                setPasswordErrorMessage("Incorrect password.")
            }
        }else{
            setUsernameErrorMessage("Incorrect username.")
        }

    }

  return (
    <>
    <section className="container-fluid">
        <div className="container pt-4 d-flex justify-content-center">
        <form className='bg-dark text-white p-5'>
            <h1 className='square-fonts text-center'>SIGN IN</h1>
            <div className="mb-3">
                <label  className="form-label">Username</label>
                <input type="text" className="form-control" name='username' ref={username}/>
                {usernameErrorMessage!="" && <div className="form-text bg-danger text-white px-2">{usernameErrorMessage}</div>}
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" name='password' ref={password}/>
                {passwordErrorMessage!="" && <div className="form-text bg-danger text-white px-2">{passwordErrorMessage}</div>}
            </div>
            <button type="button" className="btn btn-primary w-100" onClick={login}>SIGN IN</button>
            <div className='mt-4 d-flex  justify-content-between'>
                <a href='#' className='text-white'>Forgot your password?</a>
                <button type="button" className=" btn btn-info text-dark btn-sm" >SIGN UP</button>
            </div>
        </form>
        </div>

    </section>
     
    
    </>
  )
}

export default SignIn