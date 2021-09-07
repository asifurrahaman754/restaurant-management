import * as s from "./style.module.css";

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
            <img src="/assets/storyImage.jpg" alt="" />
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
    </section>
  );
}
