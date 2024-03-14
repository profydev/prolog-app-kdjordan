import UIInput from "./ui-input";
import { Meta, StoryFn } from "@storybook/react";

export default {
  component: UIInput,
  title: "UIInput",
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof UIInput>;

type UIInputProps = {
  hint?: string;
  label?: string;
  icon: boolean;
  disabled?: boolean;
  errorMssg?: string;
  placeholder: string;
  error: boolean;
};

const Template: StoryFn<typeof UIInput> = ({
  label,
  hint,
  errorMssg,
  placeholder,
  icon,
  disabled,
  error,
}: UIInputProps) => (
  <div style={{ margin: "2rem" }}>
    <UIInput
      label={label}
      hint={hint}
      placeholder={placeholder}
      errorMssg={errorMssg}
      icon={icon}
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

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  placeholder: "olivia@profy.com",
  disabled: true,
  error: false,
};
PrimaryDisabled.parameters = {
  viewMode: "docs",
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  placeholder: "olivia@profy.com",
  icon: true,
  error: false,
};
PrimaryWithIcon.parameters = {
  viewMode: "docs",
};

export const PrimaryWithIconDisabled = Template.bind({});
PrimaryWithIconDisabled.args = {
  placeholder: "olivia@profy.com",
  icon: true,
  disabled: true,
  error: false,
};
PrimaryWithIconDisabled.parameters = {
  viewMode: "docs",
};

export const PrimaryWithIconLabel = Template.bind({});
PrimaryWithIconLabel.args = {
  placeholder: "olivia@profy.com",
  icon: true,
  error: false,
  label: "Label",
};
PrimaryWithIconLabel.parameters = {
  viewMode: "docs",
};

export const PrimaryWithIconLabelAndHint = Template.bind({});
PrimaryWithIconLabelAndHint.args = {
  placeholder: "olivia@profy.com",
  icon: true,
  error: false,
  label: "Label",
  hint: "This is a hint",
};
PrimaryWithIconLabelAndHint.parameters = {
  viewMode: "docs",
};

export const ErrorNoMailIconWithErrorIcon = Template.bind({});
ErrorNoMailIconWithErrorIcon.args = {
  placeholder: "olivia@profy.com",
  icon: false,
  error: true,
  errorMssg: "This is an error",
};
ErrorNoMailIconWithErrorIcon.parameters = {
  viewMode: "docs",
};

export const ErrorNoMailIconErrorIcon = Template.bind({});
ErrorNoMailIconErrorIcon.args = {
  placeholder: "olivia@profy.com",
  icon: false,
  errorMssg: "This is an error",
};
ErrorNoMailIconErrorIcon.parameters = {
  viewMode: "docs",
};

export const ErrorWithMailIconErrorIcon = Template.bind({});
ErrorWithMailIconErrorIcon.args = {
  placeholder: "olivia@profy.com",
  icon: true,
  error: true,
  errorMssg: "This is an error",
};
ErrorWithMailIconErrorIcon.parameters = {
  viewMode: "docs",
};
