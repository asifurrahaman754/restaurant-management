import * as s from "./style.module.css";
import { blogData } from "../../data";
import Article from "./Article";

export default function FeatureBlog() {
  const items = [];
  const renderBlogData = () => {
    for (let i = 0; i < 3; i++) {
      items.push(<Article item={blogData[i]} />);
    }
    return items;
  };

  return (
    <section id="Blogs" className={s.blog_section}>
      <h3 className={s.blog_section_title}>Blog Our Lates News</h3>
      <p className={s.blog_section_des}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </p>

      <div className={s.blog_container}>{renderBlogData()}</div>
    </section>
  );
}
