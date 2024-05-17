import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  searchText = () => {
    let searchInput = document.getElementById("SEARCH");
    localStorage.setItem("news", searchInput.value);
    this.props.setSearch(searchInput.value);
  };

  render() {
    return (
      <div>
        <nav
          className={`navbar fixed-top navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}
        >
          <Link className="navbar-brand" to="#">
            NEWSTIME
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" style={{backgroundImage:`url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath ${this.props.mode==='light'?"stroke=%27rgba%280, 0, 0, 0.55%29%27":"stroke=%27rgba%28255, 255, 255, 0.55%29%27"} stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e")`}} ></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Countries
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/fr">
                    France
                  </Link>
                  <Link className="dropdown-item" to="/us">
                    US
                  </Link>
                  <Link className="dropdown-item" to="/cn">
                    China
                  </Link>
                  <Link className="dropdown-item" to="/be">
                    Belgium
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="#">
                    Something else here
                  </Link>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                id="SEARCH"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Link to="/search">
                <button
                  onClick={this.searchText}
                  className="btn btn-sm btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </Link>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
