import * as s from "./style.module.css";
import { blogData } from "../../data";
import Article from "./Article";

export default function Blog() {
  return (
    <section id="Blogs" className={s.blog_section}>
      <h3 className={s.blog_section_title}>Blog Our Lates News</h3>
      <p className={s.blog_section_des}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </p>

      <div className={s.blog_container}>
        {blogData.map(item => (
          <Article item={item} />
        ))}
      </div>
    </section>
  );
}
