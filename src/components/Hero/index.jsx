import React from "react";
import Input from "./Input";
import * as s from "./style.module.css";

export default function Hero() {
  return (
    <section className={s.hero_bg}>
      <div className={s.hero_container}>
        <div className={s.hero_content}>
          <h2>Instant Food, for Instant hunger</h2>
          <p>
            FoodBuzz is a online food store, we provide best quality food to our
            customer both online and offline
          </p>

          <Input />
        </div>
        <div className={s.hero_image}>
          <img src="/assets/heroimage.png" alt="hero image" />
        </div>
      </div>
    </section>
  );
}
