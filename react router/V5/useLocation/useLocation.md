```
import React from 'react';
import { useLocation} from "react-router";
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

const Settings = () => {
    let location = useLocation();
    console.log(location);
    return (
      <div>settings component</div>
    );
};

function App() {
    return (
        <div className="App">
            <Router>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link
                            to={{
                                pathname: "/settings",
                                state: {
                                    fromNavBar: true
                                }
                            }}
                        >
                            Settings
                        </Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/settings" component={Settings} />
                </Switch>
            </Router>
        </div>
    );
}
 
export default App;
```