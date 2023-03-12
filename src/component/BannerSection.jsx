import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

function BannerSection() {
  return (
    <>
      <section id="clients" className="clients" style={{ background: 'radial-gradient(88.75% 280.49% at 68.44% 69.26%, #66A3F2 0%, #FFFFFF 100%)' }}>
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <p style={{color:'#2785FF',fontSize:25}}>Join hundreds of others who trusted Byfriday!</p>
          </header>
          <div className="clients-slider swiper-initialized swiper-horizontal swiper-pointer-events">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3000 }}
              spaceBetween={110}
              slidesPerView={6}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide><img src={('assets/img/clients/client-1.png')} className="img-fluid" alt=""/></SwiperSlide>
              <SwiperSlide><img src={('assets/img/clients/client-2.png')} className="img-fluid" alt=""/></SwiperSlide>
              <SwiperSlide><img src={('assets/img/clients/client-3.png')} className="img-fluid" alt=""/></SwiperSlide>
              <SwiperSlide><img src={('assets/img/clients/client-4.png')} className="img-fluid" alt=""/></SwiperSlide>
              <SwiperSlide><img src={('assets/img/clients/client-5.png')} className="img-fluid" alt=""/></SwiperSlide>
              <SwiperSlide><img src={('assets/img/clients/client-6.png')} className="img-fluid" alt=""/></SwiperSlide>
              <SwiperSlide><img src={('assets/img/clients/client-7.png')} className="img-fluid" alt=""/></SwiperSlide>
              <SwiperSlide><img src={('assets/img/clients/client-8.png')} className="img-fluid" alt=""/></SwiperSlide>
          </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default BannerSection;
