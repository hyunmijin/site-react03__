import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const slider = (props) => {
  return (
    <section id="sliderSection" className={props.attr}>
        <div className="slider__inner">
            <h2 className="blind">배너 슬라이드</h2>
            <div className="slider__img">
                <Swiper
                    loop={true}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: true,
                    }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[Autoplay, Navigation, Pagination]}
                  >
                    <SwiperSlide>
                        <div className="slider s1 container">
                            <div className="text">
                                <h3>Tanaka <br />Tatsuya</h3>
                                <p>유쾌한 상상을 통해 일상을 즐겁게 만드는 미니어처 사진가</p>
                                <a href="/" className="more button-blue">더 알아보기</a>
                            </div>
                            <div className="img" aria-label="hidden">
                                <img src="./assets/images/slider/bell.png" alt="이미지1" />
                                <img src="./assets/images/slider/calendar.png" alt="이미지2" />
                                <img src="./assets/images/slider/clapperboard.png" alt="이미지3" />
                            </div>
                            <div className="circle" aria-label="hidden">
                                <span className="circle c1"></span>
                                <span className="circle c2"></span>
                                <span className="circle c3"></span>
                                <span className="circle c4"></span>
                                <span className="circle c5"></span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider s1 container">
                            <div className="text">
                                <h3>Tanaka <br />Tatsuya</h3>
                                <p>유쾌한 상상을 통해 일상을 즐겁게 만드는 미니어처 사진가</p>
                                <a href="/" className="more button-blue">더 알아보기</a>
                            </div>
                            <div className="img" aria-label="hidden">
                                <img src="./assets/images/slider/bell.png" alt="이미지1" />
                                <img src="./assets/images/slider/calendar.png" alt="이미지2" />
                                <img src="./assets/images/slider/clapperboard.png" alt="이미지3" />
                            </div>
                            <div className="circle" aria-label="hidden">
                                <span className="circle c1"></span>
                                <span className="circle c2"></span>
                                <span className="circle c3"></span>
                                <span className="circle c4"></span>
                                <span className="circle c5"></span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider s1 container">
                            <div className="text">
                                <h3>Tanaka <br />Tatsuya</h3>
                                <p>유쾌한 상상을 통해 일상을 즐겁게 만드는 미니어처 사진가</p>
                                <a href="/" className="more button-blue">더 알아보기</a>
                            </div>
                            <div className="img" aria-label="hidden">
                                <img src="./assets/images/slider/bell.png" alt="이미지1" />
                                <img src="./assets/images/slider/calendar.png" alt="이미지2" />
                                <img src="./assets/images/slider/clapperboard.png" alt="이미지3" />
                            </div>
                            <div className="circle" aria-label="hidden">
                                <span className="circle c1"></span>
                                <span className="circle c2"></span>
                                <span className="circle c3"></span>
                                <span className="circle c4"></span>
                                <span className="circle c5"></span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default slider
