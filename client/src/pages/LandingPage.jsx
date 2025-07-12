import React from "react";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

const LandingPage = () => {
  return (
    <div className="container-fluid p-0">
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
            <a className="nav-link text-primary" href="/contact">
              Contact
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link text-primary" href="/blog">
              Blog
            </a>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link text-primary" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="d-flex flex-wrap align-items-center justify-content-between px-5 py-5">
        <div className="col-md-6">
          <h1>
            Welcome to <span className="text-danger">Blood4U</span>.
          </h1>
          <h4 className="text-dark fw-semibold">Donate Blood & Save Lives.</h4>
          <p className="text-muted">
            Be a hero in someone's story. Your one donation can give someone
            many tomorrows. Donate blood, save lives, and make the world a
            healthier, happier place.
          </p>
          <div className="d-flex gap-3">
            <Link to="/register" className="btn btn-primary">
              Donate Blood
            </Link>
            <Link to="/register" className="btn btn-secondary">
              Request Blood
            </Link>
          </div>
        </div>
        <div className="col-md-5 mt-4 mt-md-0">
          <img
            src="./assets/images/landingIMg.jpg"
            alt="Donation"
            className="img-fluid rounded shadow-sm"
          />
        </div>
      </section>

      {/* Overview Section */}
      <section id="about" className="bg-light py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">Overview</h2>
          <p className="text-center px-5">
            At <strong>Blood4U</strong>, our mission is to revolutionize the way
            blood donation, storage, and distribution are managed. We recognize
            that blood is a vital resource that saves lives, and its
            availability is crucial in emergencies and routine medical
            procedures.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <small>
          &copy; {new Date().getFullYear()} Blood4U. All rights reserved by
          Abhishek Ahirwar.
        </small>
      </footer>
    </div>
  );
};

export default LandingPage;
