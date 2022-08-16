import { useState } from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";

// two child input components but their value must be input 1 - input 2 =1
const Parent = () => {
  const [diffValue, setdiffValue] = useState(0);

  const changeDiffValue = (value) => {
    setdiffValue(value);
  };

  return (
    <div>
      <ChildOne changeDiffValue={changeDiffValue} diffValue={diffValue} />
      <ChildTwo changeDiffValue={changeDiffValue} diffValue={diffValue} />
    </div>
  );
};

export default Parent;
