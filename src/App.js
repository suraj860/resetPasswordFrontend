import React from "react";
import Login from "./components/loginForm";
import Forget from"./components/forget"
import{ContextProvider} from "./components/context"
import{BrowserRouter , Switch , Route} from "react-router-dom"
import Newpassword from "./components/resetPasswordForm";
import RegisterForm from "./components/registerForm";

function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path ="/" component={Login}/>
            <Route path ="/forget_pass" component={Forget}/>
            <Route exact path ="/:id" component={Newpassword}/>
            <Route path ="/register" component={RegisterForm}/>
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
