import UICheckbox from "./ui-checkbox";
import { Meta, StoryFn } from "@storybook/react";

export default {
  component: UICheckbox,
  title: "UICheckbox",
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof UICheckbox>;

const Template: StoryFn<typeof UICheckbox> = ({ label, size, disabled }) => (
  <div style={{ margin: "2rem" }}>
    <UICheckbox label={label} size={size} disabled={disabled} />
  </div>
);

export const Small = Template.bind({});
Small.args = {
  label: "Label",
  size: "small",
};
Small.parameters = {
  viewMode: "docs",
};
export const Medium = Template.bind({});
Medium.args = {
  label: "Label",
  size: "medium",
};
Medium.parameters = {
  viewMode: "docs",
};
export const SmallDisabled = Template.bind({});
SmallDisabled.args = {
  label: "Label",
  size: "small",
  disabled: true,
};
SmallDisabled.parameters = {
  viewMode: "docs",
};
export const MediumDisabled = Template.bind({});
MediumDisabled.args = {
  label: "Label",
  size: "medium",
  disabled: true,
};
MediumDisabled.parameters = {
  viewMode: "docs",
};
