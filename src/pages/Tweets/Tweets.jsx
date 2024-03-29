import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { statusFilters } from "../../redux/constans";
import { getFollowers, getStatusFilter } from "../../redux/selectors";
import { fetchFollowers } from "../../redux/thunk";

import { Filter } from "../../components/Filter/Filter";
import { TweetsList } from "../../components/TweetsList/TweetsList";

import s from "./Tweets.module.scss";
import logo from "../../images/logo.svg";
import picture from "../../images/picture.png";

const getVisibleFollowers = (followers, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.follow:
      return followers.filter((follower) => !follower.completed);
    case statusFilters.followings:
      return followers.filter((follower) => follower.completed);
    default:
      return followers;
  }
};

export const Tweets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFollowers());
  }, [dispatch]);

  const followers = useSelector(getFollowers);
  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleFollowers(followers, statusFilter);

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <NavLink to="/" className={s.link}>
          Back
        </NavLink>
        <Filter />
        <ul className={s.list}>
          {visibleTasks.map((follower) => (
            <li className={s.item} key={follower.id}>
              <img className={s.logo} src={logo} alt="logo" />

              <img className={s.picture} src={picture} alt="asks" />

              <div className={s.lineLeft}></div>

              <div className={s.lineRight}></div>
              <TweetsList follower={follower} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
