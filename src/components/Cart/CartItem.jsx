import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as s from "./style.module.css";
import { setcartItem } from "../../redux/storeSLice";

export default function CartItem({ item }) {
  const [quantity, setquantity] = useState(0);
  const dispatch = useDispatch();
  const cartItem = useSelector(state => state.store.cartItem);

  const delFromCart = () => {
    const newArr = cartItem.filter(el => el.id !== item.id);
    dispatch(setcartItem(newArr));
  };

  return (
    <div className={s.cartItem}>
      <img
        loading="lazy"
        src={item.image}
        alt="food"
        className={s.cartItem_img}
      />

      <div className={s.cartItem_info}>
        <h3 className={s.cartItem_name}>{item.name}</h3>
        <span className={s.cartItem_price}>{item.price}</span>
      </div>

      <div className={s.cart_btn}>
        <div className={s.cartItem_quantity}>
          <span
            onClick={() => setquantity(q => q - 1)}
            className={`${s.cartItem_quantity_dec} ${
              quantity || s.btn_disabled
            }`}
          >
            -
          </span>
          <span className={s.cartItem_quantity_no}>{quantity}</span>
          <span
            onClick={() => setquantity(q => q + 1)}
            className={s.cartItem_quantity_inc}
          >
            &#43;
          </span>
        </div>

        <button onClick={delFromCart} className={s.cartItem_del}>
          delete from cart
        </button>
      </div>
    </div>
  );
}
