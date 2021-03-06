import { useState, useEffect } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { VscMenu } from "react-icons/vsc";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import * as s from "./style.module.css";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [isOpen, setisOpen] = useState(false);
  const [stick, setstick] = useState(false);
  const history = useHistory();
  const { cartItem, user } = useSelector(state => state.store);

  //hide the other content outside the viewport whenver the sidebar is open
  useEffect(() => {
    isOpen && (document.body.style.overflow = "hidden");
    !isOpen && (document.body.style.overflow = "unset");

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
        setstick(true);
      } else {
        setstick(false);
      }
    });
  }, [isOpen]);

  const goToCart = () => {
    const user_exists = Object.keys(user).length ? true : false;

    if (user_exists) {
      history.push("/cart");
    } else {
      history.push("/login");
    }
  };

  return (
    <header className={`${s.nav_container} ${stick && s.nav_stick}`}>
      <div className={s.nav_wrap}>
        <img className={s.logo} src="/assets/logo.png" alt="food joy logo" />

        {isOpen && <Sidebar setisOpen={setisOpen} isOpen={isOpen} />}

        <div className={s.nav_content}>
          <nav className={s.navlist_wrap}>
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <a href="#Menu">Menu</a>
            <Link to="/Blogs">BLogs</Link>
          </nav>

          <div className={s.shoping_cart}>
            <span onClick={goToCart} className={s.cartIcon}>
              <FiShoppingBag />
            </span>

            {!cartItem.length || (
              <span className={s.cart_item_total}>{cartItem.length}</span>
            )}
          </div>

          <Link to="/login">
            <button className={s.nav_signin_btn}>Sign in</button>
          </Link>
          <span onClick={() => setisOpen(true)} className={s.hamberger_Icon}>
            <VscMenu />
          </span>
        </div>
      </div>
    </header>
  );
}
