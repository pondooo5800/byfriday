import React from "react";

function Footer() {
  return (
    <>
      <section
        id="recent-blog-posts"
        className="recent-blog-posts"
        style={{ backgroundColor: "#0A0A0A" }}
      >
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-6">
              <div className="post-box">
                <span style={{color: '#2785FF',fontSize:30}} className="post-date">Let’s talk about </span>
                <h1 style={{fontSize:50}} className="post-title">
                 Project
                </h1>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="post-box">
                <span style={{color: '#2785FF',fontSize:30}} className="post-date">Join </span>
                <h1 style={{fontSize:50}} className="post-title">
                 Our Team
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer" className="footer" style={{backgroundColor:'#0A0A0A'}}>
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-2 col-md-12 footer-info">
                <a href="index.html" className="logo d-flex align-items-center">
                  <img src={"assets/img/logo-foot.png"} alt="" />
                </a>
              </div>
              <div className="col-lg-3 col-md-12 footer-info">
              <hr style={{color:'#fff'}}></hr>
              <div className="social-links mt-3">
                  <a href="#" className="youtube" style={{color:'#fff'}}>
                    <i className="bi bi-youtube"></i>
                  </a>
                  <a href="#" className="instagram" style={{color:'#fff'}}>
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="facebook" style={{color:'#fff'}}>
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="linkedin" style={{color:'#fff'}}>
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright" style={{color:'#fff',textAlign:"left"}}>
            &copy; Copyright{" "}
              <span>Byfriday solutions co., ltd.</span>
              <br/>
              <span>2021-2023 l All right reserved</span>

          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
