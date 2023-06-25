import React from "react";
import Contents from "../layout/Contents";

import Slider from "../section/Slider";
import Intro from "../section/Intro";
import Member from "../section/Member";
import Portfolio from "../section/Portfolio";
import Youtube from "../section/Youtube";
import Unsplash from "../section/Unsplash";
import Movie from "../section/Movie";

const Home = () => {
  return (
    <>
      <Contents>
        <Slider attr={"slider__wrap cafe5"} />
        <Intro attr={"intro__wrap section bg-blue"} />
        <Member attr={"members__wrap section center"} />
        <Portfolio attr={"port__wrap section center"} />
        <Youtube attr={"youtube__wrap cafe5 section"} />
        <Unsplash attr={"unsplash__wrap cafe5 section bg-blue"} />
        <Movie attr={"movie__wrap cafe5 section"} />
      </Contents>
    </>
  );
};

export default Home;
