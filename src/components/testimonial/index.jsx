import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImQuotesLeft } from "react-icons/im";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

import * as s from "./style.module.css";
import { testimonial } from "../../data";
import TestimonialItem from "./TestimonialItem";

export default function Testimonial() {
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: false,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={s.testimonial_container}>
      <div className={s.testimonial_wrap}>
        <span className={s.title_quote}>
          <ImQuotesLeft />
        </span>
        <h3>Kind words from our customers</h3>

        <div className={s.testimonial_card_wrap}>
          <Slider {...settings}>
            {testimonial.map(item => (
              <TestimonialItem item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

//Custom slider arrow
function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <span className={s.slider_nextBtn} onClick={onClick}>
      <BsArrowRight />
    </span>
  );
}

//Custom slider arrow
function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <span className={s.slider_prevBtn} onClick={onClick}>
      <BsArrowLeft />
    </span>
  );
}
