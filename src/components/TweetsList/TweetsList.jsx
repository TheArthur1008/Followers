import React from "react";
import { useDispatch } from "react-redux";

import { toggleCompleted } from "../../redux/thunk";

import s from "./TweetsList.module.scss";

export const TweetsList = ({ follower }) => {
  const dispatch = useDispatch();
  const isFollow = () => {
    dispatch(toggleCompleted(follower));
  };

  const count = (count) => {
    if (!follower.completed) {
      return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (Number(count) + 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      <div className={s.circle}>
        <img
          className={s.avatar}
          src={follower.avatar}
          alt={follower.user}
          width="80px"
          title={follower.user}
        />
      </div>

      <p className={s.tweets}>
        <span>{follower.tweets}</span> tweets
      </p>

      <p className={s.followers}>
        <span>{count(follower.followers)}</span> Followers
      </p>
      <button
        className={follower.completed ? s.btnIsActive : s.btn}
        type="button"
        onClick={isFollow}
      >
        {follower.completed ? "Following" : "Follow"}
      </button>
    </>
  );
};
