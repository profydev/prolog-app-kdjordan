import UISelect from "./ui-select";
import { Meta, StoryFn } from "@storybook/react";

export default {
  component: UISelect,
  title: "UISelect",
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof UISelect>;

type UISelectProps = {
  title: string;
  hint?: string;
  label?: string;
  icon: boolean;
  options: string[];
  disabled?: boolean;
  errorMssg: string;
};

const testOptions: string[] = [
  "Alice Johnson",
  "Charlie Brown",
  "David Smith",
  "Emily Davis",
  "Frankie Green",
];

const Template: StoryFn<typeof UISelect> = ({
  title,
  icon,
  label,
  hint,
  options,
  disabled,
  errorMssg,
}: UISelectProps) => (
  <div style={{ margin: "2rem" }}>
    <UISelect
      title={title}
      label={label}
      hint={hint}
      icon={icon}
      options={options}
      disabled={disabled}
      errorMssg={errorMssg}
    ></UISelect>
  </div>
);

export const PrimaryWithLabel = Template.bind({});
PrimaryWithLabel.args = {
  title: "Select Team Member",
  label: "Tean Member",
  icon: false,
  options: testOptions,
  disabled: false,
};
PrimaryWithLabel.parameters = {
  viewMode: "docs",
};

export const PrimaryNoLabelNoHint = Template.bind({});
PrimaryNoLabelNoHint.args = {
  title: "Select Team Member",
  icon: false,
  options: testOptions,
  disabled: false,
};
PrimaryNoLabelNoHint.parameters = {
  viewMode: "docs",
};

export const PrimaryNoLabelWithHint = Template.bind({});
PrimaryNoLabelWithHint.args = {
  title: "Select Team Member",
  hint: "This is a hint text",
  icon: false,
  options: testOptions,
  disabled: false,
};
PrimaryNoLabelWithHint.parameters = {
  viewMode: "docs",
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  title: "Select Team Member",
  icon: false,
  options: testOptions,
  disabled: true,
};
PrimaryDisabled.parameters = {
  viewMode: "docs",
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  title: "Select Team Member",
  hint: "This is hint text",
  icon: true,
  options: testOptions,
  disabled: false,
};
PrimaryWithIcon.parameters = {
  viewMode: "docs",
};

export const PrimaryWithError = Template.bind({});
PrimaryWithError.args = {
  title: "Select Team Member",
  hint: "This is hint text",
  icon: true,
  options: testOptions,
  disabled: false,
  errorMssg: "this is an error message",
};
PrimaryWithError.parameters = {
  viewMode: "docs",
};
