
import"./login.css"
import axios from "axios";
import React, { useContext } from "react";
import Message from "./message";
import{AppContext} from "./context"


function Forget(){
    const {name , setName,setPopup ,popup} = useContext(AppContext)
    const{ setResult} = useContext(AppContext)
    
//calling a  reset  password api
    async function resetPass(){
        try{
            const response = await axios.post("https://resetpassword1312.herokuapp.com/reset",{
                email:name
            })
            setResult(response.data)
            console.log(response.data)
        }catch(error){
            console.log(error)
        }
      
    }

//handle changes in the form
    function handleChange(event){
        switch (event.target.name) {
            case "userName":
                setName(event.target.value)
                break;
        
            default:
                break;
        }
    }

    //handle submit
    function handleSubmit(event){
        event.preventDefault()
        resetPass()
        setPopup(!popup)
    }
    return(
        <>
        {/* displaying the reset form  */}
        <div  className="containers">
         <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="titles">
                <p className="welcome">Reset Your Password</p>
                </div>
            
            <input className="form-control text" type="email" value={name} name="userName" 
            placeholder ="Enter your email" required onChange={handleChange}></input><br/>

            <button type="submit" className="btn-lg btn-block btn btn-primary btns"  >Send Email</button>
           
        </form>
        </div>
        </div>
        {/* to desplay the response */}
        {
            popup===true ? <Message/> : null
        }
        </>
    )
}

export default Forget;