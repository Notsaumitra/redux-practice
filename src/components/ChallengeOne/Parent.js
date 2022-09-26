import { createContext, useState } from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";
import HookUseRefPractice from "./HookUseRefPractice";

// two child input components but their value must be input 1 - input 2 =1
const NameContext = createContext("Default");
const Parent = () => {
  const [diffValue, setdiffValue] = useState(0);

  const changeDiffValue = (value) => {
    setdiffValue(value);
  };

  return (
    <div>
      <NameContext.Provider value="Saumitra">
        <ChildOne changeDiffValue={changeDiffValue} diffValue={diffValue} />
        <ChildTwo changeDiffValue={changeDiffValue} diffValue={diffValue} />
      </NameContext.Provider>
    </div>
  );
};

export default Parent;
export { NameContext };
