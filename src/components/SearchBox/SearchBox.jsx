import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";
import { useId } from "react";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchBoxId = useId();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchBox}>
      <label className={css.label} htmlFor={searchBoxId}>
        Find contacts by name
      </label>
      <input
        type="text"
        id={searchBoxId}
        onChange={handleChange}
        placeholder="Search contacts"
      />
    </div>
  );
};

export default SearchBox;
