import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { statusFilters } from "../../redux/constans";
import { getStatusFilter } from "../../redux/selectors";
import { setStatusFilter } from "../../redux/slice/filterSlice";
import { ButtonFilter } from "../Button/ButtonFilter/ButtonFilter";

import s from "./Filter.module.scss";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <div className={s.wrapper}>
      <ButtonFilter
        type="button"
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </ButtonFilter>
      <ButtonFilter
        type="button"
        selected={filter === statusFilters.follow}
        onClick={() => handleFilterChange(statusFilters.follow)}
      >
        Follow
      </ButtonFilter>
      <ButtonFilter
        type="button"
        selected={filter === statusFilters.followings}
        onClick={() => handleFilterChange(statusFilters.followings)}
      >
        Followings
      </ButtonFilter>
    </div>
  );
};
