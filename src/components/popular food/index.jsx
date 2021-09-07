import * as s from "./style.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowRight } from "react-icons/ai";

import { popularFoodData } from "../../data";
import FoodListItem from "./FoodListItem";

export default function PopularFood() {
  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="Menu" className={s.popularFood_section}>
      <h3 className={s.popularFood_title}>Special Menu for you</h3>

      <div className={s.food_list_wrap}>
        <Slider {...settings}>
          {popularFoodData.map(item => (
            <FoodListItem item={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

//Custom slider arrow
function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <span className={s.slider_nextBtn} onClick={onClick}>
      <AiOutlineArrowRight />
    </span>
  );
}
