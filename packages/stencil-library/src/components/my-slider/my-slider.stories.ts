export default {
  title: 'Components/MySlider',
};
const Template = args => `<my-slider min=${args.min} max=${args.max} step=${args.step} show=${args.show}></my-slider>`;

const commonArgs = {
  min: 0,
  max: 10,
  step: 1,
  show: false,
};
export const With_Min_Max = Template.bind({});
With_Min_Max.args = {
  ...commonArgs,
  min: 5,
  max: 50,
};

export const With_Step = Template.bind({});
With_Step.args = {
  ...commonArgs,
  step: 2,
};
export const With_Visible_Value = Template.bind({});
With_Visible_Value.args = {
  ...commonArgs,
  show: true,
};
