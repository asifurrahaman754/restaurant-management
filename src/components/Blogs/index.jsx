import * as s from "./style.module.css";
import { blogData } from "../../data";
import Article from "../Feature blog/Article";

export default function Blogs() {
  return (
    <section className={s.blogs_container}>
      {blogData.map(item => (
        <Article item={item} />
      ))}
    </section>
  );
}
