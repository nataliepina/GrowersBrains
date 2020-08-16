import React from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

import Landing from "./screens/Landing";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Dashboard from "./screens/Dashboard";
import Products from "./screens/Products";
import DailyGrow from "./screens/DailyGrow";
import Consulting from "./screens/Dashboard";
import GreenHouse from "./screens/GreenHouse";
import Error from "./screens/Error";

import ProtectedRoute from "./components/ProtectedRoute";
import DarkModeToggler from "./components/DarkMode/DarkModeToggler";

const privateRouteProps = [
  { path: "/dashboard", component: Dashboard, exact: true },
  { path: "/products", component: Products },
  { path: "/dailygrow", component: DailyGrow },
  { path: "/consulting", component: Consulting },
  { path: "/greenhouse", component: GreenHouse },
];

function App() {
  return (
    <Router>
      <DarkModeToggler />
      <Switch>
        {privateRouteProps.map((props) => (
          <ProtectedRoute {...props} key={props.path} />
        ))}
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Landing} />
        <Route path="/404" component={Error} />
        {/* If there are no route matches... */}
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
