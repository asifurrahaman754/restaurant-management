import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { ImLocation } from "react-icons/im";
import * as s from "./style.module.css";

export default function Footer() {
  return (
    <section className={s.footer_container}>
      <div className={s.footer_wrapper}>
        <div className={s.footer_content_block}>
          <img loading="lazy" src="/assets/logo.png" alt="website logo" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae, inventore. Eum iste molestias sequi laboriosam sunt
            quae atque
          </p>
          <div className={s.footer_social_link}>
            <span>
              <AiFillFacebook />
            </span>
            <span>
              <AiFillTwitterSquare />
            </span>
            <span>
              <AiFillInstagram />
            </span>
            <span>
              <AiFillLinkedin />
            </span>
          </div>
        </div>

        <div className={s.footer_content_block}>
          <h3>Quick Links</h3>
          <ul className={s.links_wrap}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
          </ul>
        </div>

        <div className={s.footer_content_block}>
          <h3>Contact Us</h3>
          <ul className={s.contact_info_wrap}>
            <li>
              <span>
                <FaPhoneAlt />
              </span>
              +8801644125098
            </li>
            <li>
              <span>
                <GrMail />
              </span>
              foodbuzz@gmail.com
            </li>
            <li>
              <span>
                <ImLocation />
              </span>
              Halishahar, Chattogram
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
