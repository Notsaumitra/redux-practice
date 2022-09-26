import React, { useContext, useRef } from "react";
import { NameContext } from "./Parent";

const HookUseRefPractice = () => {
  const value = useContext(NameContext);
  const divRef = useRef(null);

  return (
    <>
      <h1>{value}</h1>
      <div
        ref={divRef}
        onClick={() => {
          console.log(divRef.current);
          divRef.current.innerText = "clicked";
        }}
      >
        HookUseRefPractice
      </div>
    </>
  );
};

export default HookUseRefPractice;
