import ReactDOM from "react-dom";
import { GrClose } from "react-icons/gr";
import * as s from "./style.module.css";
import { Link } from "react-router-dom";

export default function Sidebar({ isOpen, setisOpen }) {
  return ReactDOM.createPortal(
    <>
      <div className={s.sidebar_container}>
        <div className={s.sidebar}>
          <span onClick={() => setisOpen(false)} className={s.close}>
            <GrClose />
          </span>

          <nav className={s.navlist_wrap}>
            <Link onClick={() => setisOpen(false)} to="/">
              Home
            </Link>
            <Link onClick={() => setisOpen(false)} to="/about">
              About us
            </Link>
            <Link onClick={() => setisOpen(false)} to="/Blogs">
              BLogs
            </Link>
            <a onClick={() => setisOpen(false)} href="#">
              Menu
            </a>
          </nav>
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
}
