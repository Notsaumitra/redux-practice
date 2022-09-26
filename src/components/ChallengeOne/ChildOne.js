import React, { useContext } from "react";
import { NameContext } from "./Parent";

const ChildOne = ({ diffValue, changeDiffValue }) => {
  let value = useContext(NameContext);
  console.log(value);

  return (
    <div>
      <h1>{value}</h1>
      <input
        type="number"
        value={diffValue}
        onChange={(e) => changeDiffValue(e.target.value)}
      />
      <button onClick={() => (value = "Test")}>Change</button>
    </div>
  );
};

export default ChildOne;
