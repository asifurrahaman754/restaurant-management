import { useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { setsearchValue } from "../../redux/storeSLice";
import * as s from "./style.module.css";

export default function Input({ value }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const inputRef = useRef("");

  const handleSearch = e => {
    e.preventDefault();
    //send the input value to store
    dispatch(setsearchValue(inputRef.current.value));
    //go to search page
    history.push("/search");
  };

  return (
    <form onSubmit={handleSearch} className={s.input_wrap}>
      <span className={s.searchIcon}>
        <FiSearch />
      </span>
      <input
        ref={inputRef}
        required
        maxLength="20"
        placeholder="what are your looking for?"
        type="text"
        value={value && value}
      />
      <select name="type" className={s.food_type}>
        <option value="type">type</option>
        <option value="all">all</option>
        <option value="burger">burger</option>
        <option value="sushi">sushi</option>
        <option value="cake">cake</option>
        <option value="steak">steak</option>
      </select>
      <button type="submit" className={s.searchBtn}>
        search
      </button>
    </form>
  );
}
