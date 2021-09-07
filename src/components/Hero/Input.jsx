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
  const dropdownRef = useRef("");

  const handleSearch = e => {
    e.preventDefault();

    //if user doesn't select any food type then return from the function
    if (dropdownRef.current.value === "type") {
      alert("please select a food type");
      return;
    }

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
        type="search"
        value={value && value}
      />
      <select ref={dropdownRef} name="type" className={s.food_type}>
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
