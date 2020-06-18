import React from "react";

export class CompanyNavbar extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return(
        <div className="nav-flex bg-dark">
        <nav className="navbar navbar-expand-md navbar-dark">

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Jobs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Requests</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
  );
  }
}