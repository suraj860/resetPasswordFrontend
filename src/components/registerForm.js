
import axios from "axios";
import React , {useContext} from "react";
import "./login.css"
import{AppContext} from "./context"
import Message from "./message";

function RegisterForm(){
     //using the states data provided by context api
    const {name , setName} = useContext(AppContext)
    const{password , setPassword, setPopup ,popup} = useContext(AppContext)
    const{ setResult} = useContext(AppContext)

    //api call for registeration 
    async function registerNew(){
        try{
            const response = await axios.post("https://resetpassword1312.herokuapp.com/user/register" ,{
                email:name,
                password:password
            })
            setResult(response.data)
          
        }catch(error){
            console.log(error)
        }
      
    }

//handleing changes in the form
    function handleChange(event){
        switch (event.target.name) {
            case "userName":
                setName(event.target.value)
                break;
            case "password":
                setPassword(event.target.value)
                break;
            default:
                break;
        }
    }
 //handleing the submit 
    function handleSubmit(event){
        event.preventDefault()
        registerNew()
        setPopup(!popup)
    }
    return(
        <>
         <div  className="containers">
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="titles">
                <p className="welcome">Register</p>
                </div>
            
            <input className="form-control text" type="email" value={name} name="userName" 
            placeholder ="Register your email" required onChange={handleChange}></input><br/>

            <input  className="form-control text" type="password" value={password} name="password" 
            placeholder ="Create password" onChange={handleChange} required></input><br/>

            <button type="submit" className="btn-lg btn-block btn btn-primary btns"  >Register</button>
        </form>
        </div>
        </div>
        {
            popup===true ? <Message/> : null
        }
        </>
    )
}

export default RegisterForm