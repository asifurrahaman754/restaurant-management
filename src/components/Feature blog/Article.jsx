import * as s from "./style.module.css";
import { truncatePeragraph } from "../../utils";

export default function Article({ item }) {
  return (
    <article key={item?.id} className={s.blog_cart}>
      <div className={s.blog_image}>
        <img loading="lazy" src={item.image} alt="blog" />
      </div>

      <div className={s.blog_content}>
        <h5>{truncatePeragraph(item.name, 30)}</h5>
        <p>{truncatePeragraph(item.description, 130)}</p>
        <a href="#" className={s.blog_read_more}>
          Read more
        </a>
      </div>
    </article>
  );
}
