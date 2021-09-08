import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import * as s from "./style.module.css";

export default function Cart() {
  const cartItem = useSelector(state => state.store.cartItem);

  return (
    <section className={s.cart_container}>
      <div className={s.cartItem_wrap}>
        <h2 className={s.total_cartITem}>
          {cartItem.length} items in the cart
        </h2>
        {cartItem.map(item => (
          <CartItem key={item.id} item={item} />
        ))}

        <button className={s.proceedToCheckout}>proceed to checkout</button>
      </div>
    </section>
  );
}
