import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/aboutMe">
            <AboutMe> </AboutMe>
          </Route>
          <Route path="/blog">
            <Blog> </Blog>
          </Route>
          <Route path="/">
            <Home> </Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
