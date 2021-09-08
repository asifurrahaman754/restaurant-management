import { useDispatch, useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import * as s from "./style.module.css";
import { popularFoodData } from "../../data";
import { setcartItem } from "../../redux/storeSLice";

export default function FoodListItem({ item }) {
  const cartItem = useSelector(state => state.store.cartItem);
  const dispatch = useDispatch();

  const addToCart = () => {
    //find the cart from the database and push it in the cartItem store
    const el_found = popularFoodData.find(el => el.id === item.id);
    const newArr = [el_found, ...cartItem];
    dispatch(setcartItem(newArr));
  };

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
          <button onClick={addToCart} className={s.add_cart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
