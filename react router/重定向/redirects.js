import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

export default function AuthExample(){
    return (
        <Router>
            <div>
                <AuthButton/>
                <div>
                <Link to="/public">Public Page</Link>
                <Link to="/protected">Protected Page</Link> 
                </div>

                <Switch>
                    <Route path="/public">
                        <PublicPage/>
                    </Route>

                    <Route path="/login">
                        <LoginPage/>
                    </Route>

                    <PrivateRoute path="/protected">
                        <ProtectedPage/>
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>
    )
}

const fakeAuth = {
    isAuthenticated:false,
    authenticate(cb){
        fakeAuth.isAuthenticated = true;
        setTimeout(cb,100);
    },

    signout(cb){
        fakeAuth.isAuthenticated = false;
        setTimeout(cb,100);
    }
}

function AuthButton(){
    // useHistory使我们可以访问历史记录对象，这有助于我们以编程方式导航或更改路线。
    let history = useHistory();

    return fakeAuth.isAuthenticated ? (
        <p>
            welcome
            <button onClick={()=>{
                fakeAuth.signout(()=>history.push("/"))
            }}>sign out</button>
        </p>
    ) : (
        <p>you are not logged in</p>
    )
}

function PrivateRoute({children,...rest}){
    return (
        <Route {...rest}
                render={({location}) => fakeAuth.isAuthenticated ? (
                    children
                ) : (
                    // 渲染<Redirect>会导航到新位置。新位置将覆盖历史记录堆栈中的当前位置
                    // to重定向到的URL
                    //pathname重定向到的位置
                    <Redirect to={{
                        pathname:'/login',
                        state:{from:location}
                    }}/>
                )}></Route>
    )
}

function PublicPage() {
    return <h3>Public</h3>;
  }
  
  function ProtectedPage() {
    return <h3>Protected</h3>;
  }

  function LoginPage() {
    let history = useHistory();
    // useLocation挂钩返回代表当前URL的位置对象。 
    //您可以将其想像为useState，它会在URL发生更改时返回一个新位置。
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
      fakeAuth.authenticate(() => {
        history.replace(from);
      });
    };
  
    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={login}>Log in</button>
      </div>
    );
  }
