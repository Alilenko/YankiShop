import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeSearch } from "../../app/CatalogSlice";
import SearchSvg from "../../assets/svg/searchSvg";
import "./searchInput.scss";

const SearchInput = ({ text }) => {
  const [search, setSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();

  const changeSearchInput = (e) => {
    setSearchInput(e);
    dispatch(changeSearch(e));
  };

  return (
    <div className="mobile_hide">
      <button onClick={() => setSearch(!search)} className="search-btn">
        {<SearchSvg />}
      </button>
      <div className={search ? "search-body active" : "search-body"}>
        <input
          value={searchInput}
          onChange={(e) => changeSearchInput(e.target.value)}
          placeholder={text}
          className="search-input"
          type="text"
        />
        <div className="search-img">
          <SearchSvg />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
