import React from "react";

const ChildOne = ({ diffValue, changeDiffValue }) => {
  return (
    <div>
      <input
        type="number"
        value={diffValue}
        onChange={(e) => changeDiffValue(e.target.value)}
      />
    </div>
  );
};

export default ChildOne;
