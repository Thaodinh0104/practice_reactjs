import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const HomeSlider = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
  };
  return (
    <div className="home-slider">
      <div className="container">
        <Slider {...settings}>
          <div className="item">
            <img
              src="/images/slide_1_img.jpg"
              alt="OsiFood"
              className="img-responsive logoimg "
            />
          </div>
          <div className="item">
            <img
              src="/images/slide_2_img.jpg"
              alt="OsiFood"
              className="img-responsive logoimg "
            />
          </div>
          <div className="item">
            <img
              src="/images/slide_3_img.jpg"
              alt="OsiFood"
              className="img-responsive logoimg "
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};
