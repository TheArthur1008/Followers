import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { toggleCompleted } from "../../redux/thunk";

import s from "./TweetsList.module.scss";

export const TweetsList = ({ follower }) => {
  const dispatch = useDispatch();
  const [follow, setFollow] = useState(false);
  const isFollow = () => {
    setFollow(!follow);
    dispatch(toggleCompleted(follower));
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
        <span>{follower.followers}</span> Followers
      </p>
      <button
        className={follow ? s.btnIsActive : s.btn}
        type="button"
        onClick={isFollow}
      >
        {follow ? "Following" : "Follow"}
      </button>
    </>
  );
};
