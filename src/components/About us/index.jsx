import * as s from "./style.module.css";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function AboutUs() {
  return (
    <section className={s.about_container}>
      <div className={s.hotel_image}>
        <img src="/assets/hotelImage.jpg" alt="hotel" />
        <div className={s.overlay}></div>
        <h3 className={s.about_title}>About Us</h3>
      </div>
      <div className={s.story_section}>
        <h3 className={s.story_heading}>Our Story</h3>

        <div className={s.story_content_container}>
          <div className={s.story_image}>
            <img
              loading="lazy"
              src="/assets/storyImage.jpg"
              alt="hotel image"
            />
          </div>
          <div className={s.story_content}>
            <p className={s.about_story}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              voluptas cum mollitia deleniti architecto sint asperiores hic,
              similique vero explicabo ab debitis blanditiis temporibus ex nobis
              alias modi. Odit architecto sed laboriosam? Cumque, unde. Dolores
              cum iste voluptatem repellat consectetur.
            </p>
            <p className={s.about_story}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              voluptas cum mollitia deleniti architecto sint asperiores hic,
              similique vero explicabo ab debitis blanditiis temporibus ex nobis
              alias modi. iste voluptatem repellat consectetur.
            </p>
          </div>
        </div>
      </div>

      <div className={s.story_section}>
        <h3 className={s.story_heading}>Find US</h3>
        <div className={s.findUs_content_wrap}>
          <div className={s.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.207555966427!2d91.78224714242585!3d22.30798879314055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acdedb39f841af%3A0x32f341c2f4ad3c5!2sSouth%20Middle%20Halishahar%2C%20Chattogram!5e0!3m2!1sen!2sbd!4v1631111599681!5m2!1sen!2sbd"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className={s.contact_info}>
            <h4 className={s.contact_title}>Contact Info</h4>
            <span className={s.phone}>
              <FaPhoneAlt /> +8801633125097
            </span>
            <span className={s.mail}>
              <IoMdMail /> foodbuzz@gmail.com
            </span>
            <span className={s.address}>
              <FaMapMarkerAlt /> Halishahar, Chattogram
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
