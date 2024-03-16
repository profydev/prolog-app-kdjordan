import { UICheckbox, CheckboxSize, UICheckboxProps } from "./ui-checkbox";
import { Meta, StoryFn } from "@storybook/react";

export default {
  component: UICheckbox,
  title: "UICheckbox",
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof UICheckbox>;

const Template: StoryFn<typeof UICheckbox> = ({
  children,
  boxSize = CheckboxSize.medium,
  ...props
}: UICheckboxProps) => (
  <div style={{ margin: "2rem" }}>
    <UICheckbox boxSize={boxSize} {...props}>
      {children}
    </UICheckbox>
  </div>
);

export const Base = Template.bind({});
Base.args = {
  boxSize: CheckboxSize.small,
  children: "Label",
};
Base.parameters = {
  viewMode: "docs",
};
