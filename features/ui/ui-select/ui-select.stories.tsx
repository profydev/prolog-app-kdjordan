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
  placeholder,
  label,
  hint,
  icon,
  iconSrc,
  options,
  errorMssg,
  ...props
}: UISelectProps) => (
  <div style={{ margin: "2rem" }}>
    <UISelect
      placeholder={placeholder}
      label={label}
      hint={hint}
      icon={icon}
      iconSrc={iconSrc}
      options={options}
      errorMssg={errorMssg}
      {...props}
    ></UISelect>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  placeholder: "Select Team Member",
  label: "Tean Member",
  options: testOptions,
  icon: false,
};
Primary.parameters = {
  viewMode: "docs",
};
