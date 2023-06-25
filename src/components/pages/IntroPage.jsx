import React from "react";

import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";
import IntroCont from "../intro/IntroCont";

import Intro from "../section/Intro";

const IntroPage = () => {
  return (
    <Contents>
      <ContTitle title="Intro" />
      <IntroCont />
      <Intro attr={"intro__wrap section bg-blue"} />
    </Contents>
  );
};

export default IntroPage;
