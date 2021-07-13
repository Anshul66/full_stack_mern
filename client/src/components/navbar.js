import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar= () =>{
    return(
        <>
        <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Resumo Builder</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink activeClassName="menu_active" exact className="nav-link" to="./">Home <span class="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item active">
        <NavLink activeClassName="menu_active" exact className="nav-link" to="./Resumomain">Resumo</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active" exact className="nav-link" to="./Singup">Singup</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active" exact className="nav-link" to="./Login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active" exact className="nav-link" to="./Logout">Logout</NavLink>
      </li>
      {/* <li className="nav-item">
        <NavLink activeClassName="menu_active" exact className="nav-link" to="./contact">contacts</NavLink>
      </li> */}
      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a> */}
        {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div> */}
      {/* </li> */}
      {/* <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li> */}
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
</div>
</div>
</div>
</>
    );
};
export default Navbar;