import React from "react";
import { NavLink } from "react-router-dom";

import s from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <h1 className={s.title}>Followers Page</h1>
        <NavLink to="tweets" className={s.link}>
          Go to page Tweets
        </NavLink>
      </div>
    </div>
  );
};
