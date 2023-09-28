import {
  MyComponent,
  defineCustomElements,
  MyWeb,
  MyInput,
} from "react-library";

defineCustomElements();

import React from "react";

function TestinComponent() {
  const changeHandler = (name: string) => {
    console.log(name);
  };
  return (
    <div>
      <MyComponent first="ff" middle="mm" last="as" />
      <MyWeb />
      <MyInput defaultValue="1212" label="newest" />
    </div>
  );
}

export default TestinComponent;
