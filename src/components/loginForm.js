import axios from "axios";
import React, { useContext } from "react";
import "./login.css"
import{AppContext} from "./context"
import Message from "./message";
import { Link } from "react-router-dom";

function Login(){

    //using states from the context
    const {name , setName} = useContext(AppContext)
    const{password , setPassword} = useContext(AppContext)
    const{result , setResult ,setPopup ,popup} = useContext(AppContext)

//getting the user login data
    async function getData (){
      
        try{
            const response = await axios.post("https://resetpassword1312.herokuapp.com/user/login" , {
                email:name,
                password:password
            })
            console.log(response)
            setResult(response.data)
            console.log(result)
        }catch(error){
            console.log(error)
        }
       
       
    }

//handleing changes in the form
    function handleChange(event){
        switch (event.target.name) {
            case "userName":{
                setName(event.target.value)
               
                break;
        }
            case "password":{
                setPassword(event.target.value)
               
                break;
    }
            default:{
                break;
            }
               
        }
    }

    //handleing the submit 
    function handleSubmit(event){
        event.preventDefault()
        getData()
        setPopup(!popup)
    }
    return(
        <>
        {/* log in form */}
        <div  className="containers">
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="titles">
                <p className="welcome">Welcome</p>
                </div>
            
            <input className="form-control text" type="email" value={name} name="userName" 
            placeholder ="Enter your email" required onChange={handleChange}></input><br/>

            <input  className="form-control text" type="password" value={password} name="password" 
            placeholder ="Enter your password" onChange={handleChange} required></input><br/>

            <button type="submit" className="btn-lg btn-block btn btn-primary btns"  >Login</button>
            <div>
            <hr/>
            <div className="resetDiv">

                {/* links for the forget password and registeration */}
            <Link to="/forget_pass" style={{marginTop : "20px" , marginBottom:"20px"}}>Forget Password ? </Link>
            
            <Link to="/register" style={{ marginBottom:"0"}}>SignUp/Register</Link> 
            </div>
        </div>
        </form>
        </div>
        </div>
        {
            popup===true ? <Message/> : null
        }
        </>
    )
}

export default Login;