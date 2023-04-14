import React from "react";
import { NavLink } from "react-router-dom";

import s from "./Tweets.module.scss";

import logo from "../../images/logo.svg";
import picture from "../../images/picture.png";

import users from "../../db/users.json";

export const Tweets = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <NavLink to="/" className={s.link}>
          Back
        </NavLink>
        <ul className={s.list}>
          {users.map(({ id, avatar, user, tweets, followers }) => (
            <li className={s.item} key={id}>
              <img
                className={s.logo}
                src={logo}
                alt="logo"
                width="76px"
                height="22px"
              />

              <img src={picture} alt="..." width="308" />

              <div className={s.lineLeft}></div>

              <div className={s.lineRight}></div>

              <div className={s.circle}>
                <img
                  className={s.avatar}
                  src={avatar}
                  alt={user}
                  width="80px"
                  title={user}
                />
              </div>

              <p className={s.tweets}>
                <span>{tweets}</span> tweets
              </p>

              <p className={s.followers}>
                <span>{followers}</span> Followers
              </p>

              <button className={s.btn} type="button">
                Follow
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
