import { UIInput, UIInputProps } from "./ui-input";
import { Meta, StoryFn } from "@storybook/react";

export default {
  component: UIInput,
  title: "UIInput",
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof UIInput>;

const Template: StoryFn<typeof UIInput> = ({
  label,
  hint,
  errorMssg,
  placeholder,
  disabled,
  error,
}: UIInputProps) => (
  <div style={{ margin: "2rem" }}>
    <UIInput
      label={label}
      hint={hint}
      placeholder={placeholder}
      errorMssg={errorMssg}
      disabled={disabled}
      error={error}
    />
  </div>
);

export const PrimaryEmpty = Template.bind({});
PrimaryEmpty.args = {
  placeholder: "olivia@profy.com",
};
PrimaryEmpty.parameters = {
  viewMode: "docs",
};
