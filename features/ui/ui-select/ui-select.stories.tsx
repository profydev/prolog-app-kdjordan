import { UISelect, UISelectProps } from "./ui-select";
import { Meta, StoryFn } from "@storybook/react";

export default {
  component: UISelect,
  title: "UISelect",
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof UISelect>;

const testOptions: string[] = [
  "Alice Johnson",
  "Charlie Brown",
  "David Smith",
  "Emily Davis",
  "Frankie Green",
];

const Template: StoryFn<typeof UISelect> = ({
  title,
  label,
  hint,
  icon,
  options,
  disabled,
  errorMssg,
}: UISelectProps) => (
  <div style={{ margin: "2rem" }}>
    w
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

export const Primary = Template.bind({});
Primary.args = {
  title: "Select Team Member",
  label: "Tean Member",
  options: testOptions,
  icon: false,
  disabled: false,
};
Primary.parameters = {
  viewMode: "docs",
};
