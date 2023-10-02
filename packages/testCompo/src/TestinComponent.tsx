import {
  MyComponent,
  defineCustomElements,
  MyWeb,
  MyInput,
  MyCheckbox,
  MySlider,
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
      <MySlider
        min="2"
        max="10"
        step={2}
        showValue
        onChangeEvent={(e) => console.log(e.detail)}
        onMouseUpEvent={(e) => console.log(e.detail)}
      />
    </div>
  );
}

export default TestinComponent;
