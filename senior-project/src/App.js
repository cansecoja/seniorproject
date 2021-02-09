import logo from './logo.svg';
import './App.css';
// using ES6 modules
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home.js'
import Login from './pages/Login.js'
import Signup from './pages/Signup.js'

const App = () => {
  return (
    <div className="App">
      <Router> 
        <Switch>
          <Route exact path="/">
            <div>
              <Home/>
            </div>
          </Route>
          <Route exact path="/Login">
            <Login/>
          </Route>
          <Route exact path="/Signup">
            <Signup/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
