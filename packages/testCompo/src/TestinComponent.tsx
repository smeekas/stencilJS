import {
  MyComponent,
  defineCustomElements,
  MyWeb,
  MyInput,
  MyCheckbox,
  MySlider
} from "stencilreactss";

defineCustomElements();

import React from "react";
import { MyCheckboxCustomEvent, MyInputCustomEvent, MySliderCustomEvent } from "stencilss";

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
        onChangeEvent={(e: MyInputCustomEvent<string>) => console.log(e)}
        defaultValue="1212"
        label="newest"
      />
      <MyCheckbox
        onChangeEvent={(e: MyCheckboxCustomEvent<boolean>) => console.log(e)}
        onBlurEvent={() => console.log("BLUR")}
        label="lal"
      />
      <MySlider
        min="2"
        max="10"
        step={2}
        show
        onChangeEvent={(e: MySliderCustomEvent<string>) => console.log(e.detail)}
        onMouseUpEvent={(e:MySliderCustomEvent<string>) => console.log(e.detail)}
      />
    </div>
  );
}

export default TestinComponent;
