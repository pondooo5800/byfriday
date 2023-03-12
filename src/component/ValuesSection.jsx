import React from "react";

function ValuesSection() {
  return (
    <>
      <section id="values" className="values" style={{ backgroundColor:'#0A0A0A' }}>
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <p style={{fontSize:30,color:'#fff'}}>Base in Bangkok, Thailand</p>
            <p style={{fontSize:30,color:'#fff'}}>Byfriday Solutions co. ltd is a Design Studio</p>
            <p style={{fontSize:30,color:'#fff'}}>and Specializing in Branding and Website Design.</p>
            <a  style={{fontSize:25,color:'#66A3F2'}} href="#">We are good at</a>
          </header>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="box">
                <img
                  src={"assets/img/icon_service.png"}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>

            <div
              className="col-lg-4 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="box">
                <img
                  src={"assets/img/icon_service.png"}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>

            <div
              className="col-lg-4 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="box">
                <img
                  src={"assets/img/icon_service.png"}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ValuesSection;
