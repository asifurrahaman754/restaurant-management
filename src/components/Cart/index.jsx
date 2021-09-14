import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import * as s from "./style.module.css";

export default function Cart() {
  const cartItems = useSelector(state => state.store.cartItem);

  return (
    <section className={s.cart_container}>
      <div className={s.cartItem_wrap}>
        <h2 className={s.total_cartITem}>
          {cartItems.length} items in the cart
        </h2>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}

        {!cartItems.length || (
          <Link to="/checkout">
            <button className={s.proceedToCheckout}>proceed to checkout</button>
          </Link>
        )}
      </div>
    </section>
  );
}
