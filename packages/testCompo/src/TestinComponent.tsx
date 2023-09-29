import {
  MyComponent,
  defineCustomElements,
  MyWeb,
  MyInput,
  MyCheckbox,
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
      <MyInput
        clearable
        onChangeEvent={(e) => console.log(e)}
        defaultValue="1212"
        label="newest"
      />
      <MyCheckbox
        onChangeEvent={(e) => console.log(e)}
        onBlurEvent={(e) => console.log("BLUR")}
        label="lal"
      />
    </div>
  );
}

export default TestinComponent;
