
import React , {useContext} from "react";
import "./message.css"
import {AppContext} from "./context";
import { Link } from "react-router-dom";

function Message(){
    //using the states data provided by context api
    const{result ,setPopup ,popup ,setResult} = useContext(AppContext)
    const {setName} = useContext(AppContext)
    const{ setPassword} = useContext(AppContext)

    //return the message depending upon the response send by the server
    return(
        <div className="parentdiv">
            <div className="child">
               
                   {
                        result.message?<h3 style={{color:"green"}}>{result.message}</h3>:
                        <h3 style={{color:"rgb(231, 230, 230)"}}>Loading...</h3>
                   }
                   <Link to = "/">
              <button className="btn btn-primary btn-sm" style={{marginTop : "25px" , padding :"4px 15px"}} onClick={()=>{
                  setPopup(!popup)
                  setName("")
                  setPassword("")
                  setResult("")

                  }}>OK</button></Link>
            </div>
        </div>
    )
}
export default Message;