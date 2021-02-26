import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              BLUEROSES RESTAURANT
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/menu">
                    MENU
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="place-order">
                    PLACE ORDER
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="/">
                    GET ORDER DETAILS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    CHECK ORDER STATUS
                  </a>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link" href="/customers">
                    CUSTOMERS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/suppliers">
                    SUPPLIERS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/payments">
                    PAYMENTS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/employees">
                    EMPLOYEES
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
