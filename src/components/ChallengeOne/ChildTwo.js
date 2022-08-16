import React from "react";

const ChildTwo = ({ diffValue, changeDiffValue }) => {
  return (
    <div>
      <input
        type="number"
        value={diffValue - 1}
        onChange={(e) => changeDiffValue(+e.target.value + 1)}
      />
    </div>
  );
};

export default ChildTwo;
