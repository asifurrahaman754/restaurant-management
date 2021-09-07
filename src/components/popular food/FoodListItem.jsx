import * as s from "./style.module.css";
import { AiFillStar } from "react-icons/ai";

export default function FoodListItem({ item }) {
  return (
    <div className={s.food_cart}>
      <img loading="lazy" src={item.image} alt="food" />

      <div className={s.food_content}>
        <h5 className={s.food_title}>{item.name}</h5>
        <span className={s.food_rating}>
          <span>
            <AiFillStar />
          </span>
          {item.rating}
        </span>

        <div className={s.price_wrap}>
          <span className={s.price}>{item.price}</span>
          <button className={s.add_cart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
