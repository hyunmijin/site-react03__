import React from "react";

import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";
import Protfolio from "../section/Portfolio";

const Portpage = () => {
  return (
    <Contents>
      <ContTitle title="Portfolio" />
      <Protfolio  attr={"port__wrap section center"} />
    </Contents>
  );
};

export default Portpage;
