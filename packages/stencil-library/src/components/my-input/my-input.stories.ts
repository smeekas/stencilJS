export default {
  title: 'Components/MyInput',
};
const Template = args => `<my-input label=${args.label} size=${args.size} required=${args.required} clearable=${args.clearable} value=${args.value}></my-input>`;
export const Small = Template.bind({});
const commonArgs = {
  label: 'nameOfInput',
  size: 'me',
  clearable: false,
  value: 'new input',
};
Small.args = {
  ...commonArgs,
  size: 'sm',
};
export const Medium = Template.bind({});
Medium.args = {
  ...commonArgs,
};
export const Large = Template.bind({});
Large.args = {
  ...commonArgs,
  size: 'lg',
};

export const Required = Template.bind({});
Required.args = {
  ...commonArgs,
  required: true,
};

export const Clearable = Template.bind({});
Clearable.args = {
  ...commonArgs,
  clearable: true,
};
