import React from "react";
import { Link, useLocation } from "react-router-dom";

const PublicLayout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
        <Link
          className="navbar-brand fw-bold text-danger d-flex align-items-center"
          to="/"
        >
          <img
            src="/assets/images/red-cross-logo.jpg"
            alt="logo"
            style={{ width: "30px", marginRight: "10px" }}
          />
          Blood4U
        </Link>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item mx-2">
            <Link className="nav-link text-primary" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link text-primary" href="/services">
              Services
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link text-primary" href="/about">
              About
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link text-primary" href="/blog">
              Blog
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link text-primary" href="/contact">
              Contact
            </a>
          </li>

          {/* Conditional Auth Links */}
          {location.pathname === "/login" ? (
            <li className="nav-item mx-2">
              <Link className="nav-link text-primary" to="/register">
                Register
              </Link>
            </li>
          ) : location.pathname === "/register" ? (
            <li className="nav-item mx-2">
              <Link className="nav-link text-primary" to="/login">
                Login
              </Link>
            </li>
          ) : (
            <li className="nav-item mx-2">
              <Link className="nav-link text-primary" to="/login">
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>

      {/* Page Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <small>
          &copy; {new Date().getFullYear()} Blood4U. All rights reserved by
          Abhishek Ahirwar.
        </small>
      </footer>
    </>
  );
};

export default PublicLayout;
