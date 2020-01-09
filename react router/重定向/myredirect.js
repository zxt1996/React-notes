import React,{useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

function MyApp(){
    const [state, setState] = useState({
        redirect:false
    })

    let setRedirect = () => {
        setState({
            redirect:true
        })
    }

    let renderRedirect = () => {
        if(state.redirect){
            return <Redirect to="/target"/>
        }else{
            return <Redirect to="login"/>
        }
    }

    return (
        <Router>
            <div>
                {renderRedirect()}
                <button onClick={setRedirect}>Redirect</button>
            </div>

            <Switch>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/target">
                    <Target/>
                </Route>
            </Switch>
        </Router>
    )
}

function Login(){
    return (
        <div>
            <h3>请登录</h3>
        </div>
    )
}

function Target(){
    return (
        <div>
            <h3>登录后</h3>
        </div>
    )
}
export default MyApp;