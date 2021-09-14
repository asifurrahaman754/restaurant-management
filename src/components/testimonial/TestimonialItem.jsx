import * as s from "./style.module.css";

export default function TestimonialItem({ item }) {
  return (
    <div className={s.testimonial_card}>
      <div className={s.card_header}>
        <img src={item.image} alt="user" loading="lazy" />
        <h5 className={s.name}>{item.name}</h5>
      </div>
      <p className={s.user_saying}>{item.saying}</p>
    </div>
  );
}
