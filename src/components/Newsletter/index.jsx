import { FaTelegramPlane } from "react-icons/fa";
import * as s from "./style.module.css";

export default function Newsletter() {
  return (
    <div className={s.newsletter_container}>
      <h3 className={s.newsletter_title}>
        Subscribe to Newsletter and get the latest news
      </h3>
      <div className={s.newsLetter_input_wrap}>
        <input placeholder="enter your email" type="text" />
        <span className={s.sendIcon}>
          <FaTelegramPlane />
        </span>
      </div>
    </div>
  );
}
