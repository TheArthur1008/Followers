import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStatusFilter } from "../../redux/selectors";

import { toggleCompleted } from "../../redux/thunk";

import s from "./TweetsList.module.scss";

export const TweetsList = ({ follower }) => {
  const dispatch = useDispatch();
  const [follow, setFollow] = useState(false);
  const statusFilter = useSelector(getStatusFilter);
  const isFollow = () => {
    dispatch(toggleCompleted(follower));
    setFollow(!follow);
  };

  const count = (count) => {
    if (!follow) {
      return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return Number(count) + 1;
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
        className={follow ? s.btnIsActive : s.btn}
        type="button"
        onClick={isFollow}
      >
        {follow ? "Following" : "Follow"}
      </button>
    </>
  );
};
