export default {
  title: 'Components/MyCheckbox',
};
const Template = args => `<my-checkbox label=${args.label} checked=${args.checked} disabled=${args.disabled}></my-checkbox>`;
export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  label: "your label",
  disabled: false,
};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  checked: false,
  label: 'your label',
};
