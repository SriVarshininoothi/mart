import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        {/* Logo */}
        <Link className="navbar-brand" to="/" style={{ fontSize: "25px" ,marginLeft:"20px"}}>
          <i className="bi bi-bag-fill"></i> Mart
        </Link>

        {/* Toggle */}
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

        {/* Links */}
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto align-items-center me-">

            <li className="nav-item">
              <Link className="nav-link" to="/" style={{color:"White"}}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Shop" style={{color:"White"}}>
                Shop
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Cart" style={{color:"White"}}>
                Cart
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Login" style={{color:"White"}}>
                <i className="bi bi-person-fill fs-5"></i>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link position-relative"
                to="/Cart" style={{color:"White"}}
              >
                <i className="bi bi-cart-fill fs-5"></i>

                <span className="position-absolute  start-100 translate-middle badge rounded-pill bg-danger">
                  0
                </span>
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar