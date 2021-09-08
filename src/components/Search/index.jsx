import { useSelector } from "react-redux";

import Input from "../Hero/Input";
import * as s from "./style.module.css";
import { category, popularFoodData } from "../../data";
import FoodListItem from "../popular food/FoodListItem";

export default function Search() {
  const searchValue = useSelector(state => state.store.searchValue);

  return (
    <section className={s.search_container}>
      <div className={s.search_input}>
        <Input value={searchValue} />
      </div>
      <h2 className={s.search_result}>
        Search result for <span>"{searchValue}"</span>
      </h2>

      <div className={s.result_show_container}>
        <div className={s.filters_wrap}>
          <div className={s.category_block}>
            <h3>Category</h3>
            {category.map(item => (
              <div className={s.checkbox}>
                <input type="checkbox" id={item} name={item} />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </div>
        </div>

        <div className={s.foodList_wrap}>
          {popularFoodData.map(item => (
            <FoodListItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
