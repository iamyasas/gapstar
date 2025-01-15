import { on } from "events";
import React from "react";

const Test = () => {
  const onChangeHandler = (checked: boolean) => {
    console.log(checked);
  };

  return <input type="checkbox" id="sheets-status" onChange={(e) => onChangeHandler(e.target.checked)} />;
};

export default Test;
