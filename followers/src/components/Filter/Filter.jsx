import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { statusFilters } from "../../redux/constans";
import { getStatusFilter } from "../../redux/selectors";
import { setStatusFilter } from "../../redux/slice/filterSlice";

import s from "./Filter.module.scss";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <div className={s.wrapper}>
      <button
        className={s.btn}
        type="button"
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </button>
      <button
        className={s.btn}
        type="button"
        selected={filter === statusFilters.follow}
        onClick={() => handleFilterChange(statusFilters.follow)}
      >
        Follow
      </button>
      <button
        className={s.btn}
        type="button"
        selected={filter === statusFilters.followings}
        onClick={() => handleFilterChange(statusFilters.followings)}
      >
        Followings
      </button>
    </div>
  );
};
