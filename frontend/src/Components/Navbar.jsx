import React from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  function Page() {
    window.scrollTo(0, 0);
  }

  function CloseToggle() {
    const navbarToggler = document.querySelector(".navbar-toggler");
    if (navbarToggler.offsetParent !== null) {
      navbarToggler.click();
    }
  }
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-lg-4 py-md-3 py-2">
        <button
          className="navbar-toggler ms-2 px-1 py-0 border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Link
          className="navbar-brand ms-lg-4 mx-auto mx-lg-4 d-flex align-items-center"
          to="/"
        >
          <img
            style={{borderRadius: '12px'}}
            src={process.env.PUBLIC_URL + "/Logo.png"}
            alt="Vidya Education Abroad"
            height="70"
          />
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav gap-1 gap-md-2 gap-lg-3 mb-2 mb-lg-0">
            <li className="nav-item linkss">
              <Link
                onClick={() => {
                  Page();
                  CloseToggle();
                }}
                className="nav-link text-nowrap fs-5 ms-lg-5"
                to="/migrate"
              >
                Migrate
              </Link>
            </li>
            <li className="nav-item linkss">
              <Link
                onClick={() => {
                  Page();
                  CloseToggle();
                }}
                className="nav-link text-nowrap fs-5 ms-lg-5"
                to="/work"
              >
                Work
              </Link>
            </li>
            {/* <li className="nav-item dropdown">           // dropdown menu mobile fix
              <a
                className="nav-link dropdown-toggle fs-6"   // here is the font sizes of pages 
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Study
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item fs-6" href="#">
                    ##### 
                  </a>
                </li>
                <li>
                  <a className="dropdown-item fs-6" href="#">
                    #####
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item fs-4" href="#">
                    #####
                  </a>
                </li>
              </ul>
            </li> */}
            <li className="nav-item text-nowrap fs-5 ms-lg-5 linkss">
              <Link
                onClick={() => {
                  Page();
                  CloseToggle();
                }}
                className="nav-link"
                to="/study"
              >
                Study
              </Link>
            </li>
            <li className="nav-item text-nowrap fs-5 ms-lg-5 linkss">
              <Link
                onClick={() => {
                  Page();
                  CloseToggle();
                }}
                className="nav-link"
                to="/visa"
              >
                Visa
              </Link>
            </li>
            <li className="nav-item text-nowrap fs-5 ms-lg-5 linkss">
              <Link
                onClick={() => {
                  Page();
                  CloseToggle();
                }}
                className="nav-link"
                to="/coaching"
              >
                Coaching
              </Link>
            </li>
          </ul>
          <button
            className="lmbtn text-nowrap mx-2 ms-md-3 mx-lg-5 fs-6 fs-md-5 d-md-inline-block d-none"
            type="submit" /* Hidden button for phones*/
          >
            Read More
          </button>
        </div>
      </nav>
    </div>
  );
}
