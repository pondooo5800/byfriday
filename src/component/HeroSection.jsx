import React from 'react'

function HeroSection() {
  return (
    <>
        <section id="hero" className="hero d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                    <h1 style={{color:'#66A3F2',fontSize:55}} data-aos="fade-up">OUTSTANDING <span style={{color:'#000'}}>BRAND</span></h1>
                    <h1 style={{color:'#000',fontSize:55}} data-aos="fade-up" data-aos-delay="400">&DESIGN</h1>
                    <h1 style={{color:'#000',fontSize:55}} data-aos="fade-up" data-aos-delay="600">SOLUTIONS</h1>
                    </div>
                    <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                    <img style={{borderRadius: '30px', overflow: 'hidden'}}  src={('assets/img/hero-img.png')} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}

export default HeroSection