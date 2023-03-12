import React from "react";
function Header() {
  return (
    <>
      <header id="header" className="header fixed-top">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between" style={{height:50}}>
          <a href="#" className="logo d-flex align-items-center">
          <img src={('assets/img/logo.png')} alt="" />
          </a>
          <nav id="navbar" className="navbar">
            <ul>
            <li className="dropdown"><a href="#"><span>ไทย</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="#">Drop Down 1</a></li>
                </ul>
            </li>
            <li className="dropdown"><a href="#"><span>ผลงาน</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="#"> Drop Down </a></li>
                </ul>
            </li>
            <li className="dropdown"><a href="#"><span>บริการของเรา</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="#"> Drop Down 1</a></li>
                </ul>
            </li>
              {/* <li><a className="nav-link scrollto" href="#about">About</a></li>
              <li><a className="nav-link scrollto" href="#services">Services</a></li>
              <li><a className="nav-link scrollto" href="#portfolio">Portfolio</a></li>
              <li><a className="nav-link scrollto" href="#team">Team</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
              <li><a className="getstarted scrollto" href="#about">Get Started</a></li> */}
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

        </div>
      </header>
    </>
  )
}

export default Header