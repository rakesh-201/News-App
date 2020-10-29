import React from "react";
import '../App.css'

function Navbar(props) {
  const { page, setPage } = props;
  return (
    <div>
      <nav className="navbar navbar-expand con navbar-light bg-dark">
        {/* <div > */}
        <div className="con1" >
        <a
          className="navbar-brand text-light logo"
          href="#"
        >
          E.V.S. Project
        </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse con2 " id="navbarNav">
          <ul className="navbar-nav">
            <li className={`nav-item`}>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </li>
          </ul>
        </div>
        {/* </div> */}
      </nav>
    </div>
  );
}

export default Navbar;
