import React from 'react';
import {NavLink,Route} from 'react-router-dom';
import Register from '../containers/register';
import Home from '../containers/home';
import Product from '../containers/product';

class Navigation extends React.Component{
    render()
{
    return(
            <React.Fragment>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <ul className="navbar-nav">
    <li className="nav-item">
     <NavLink className="nav-link" to="/">Home</NavLink>
    </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/register">Register</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to="/careers">Careers</NavLink>
    </li>
    <li className="nav-item">
    <form className="form-inline">
        <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
        <button className="btn btn-success" type="submit">Search</button>
      </form>
    </li>
    </ul>
  </nav>
     <Route path="/" exact component={Home}></Route>
     <Route path="/register" component={Register}></Route>
     <Route path="/product" component={Product}></Route>
      
  </React.Fragment>
    )
}
}
export default Navigation;