import { UIButton } from "./ui-button";
import { Meta, StoryFn } from "@storybook/react";
import { ButtonSizes, ButtonColor, IconType } from "./ui-button.types";

export default {
  component: UIButton,
  title: "UIButton",
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof UIButton>;

const Template: StoryFn<typeof UIButton> = ({
  title,
  size,
  color,
  disabled,
  icon,
}) => (
  <div style={{ margin: "2rem" }}>
    <UIButton
      title={title}
      size={size}
      color={color}
      disabled={disabled}
      icon={icon}
    >
      {title}
    </UIButton>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  size: ButtonSizes.large,
  color: ButtonColor.primary,
  title: "Primary",
};
Primary.parameters = {
  viewMode: "docs",
};
export const Secondary = Template.bind({});
Secondary.args = {
  size: ButtonSizes.large,
  color: ButtonColor.secondary,
  title: "Secondary",
};
Secondary.parameters = {
  viewMode: "docs",
};

export const Gray = Template.bind({});
Gray.args = {
  size: ButtonSizes.large,
  color: ButtonColor.gray,
  title: "Gray",
};
Gray.parameters = {
  viewMode: "docs",
};

export const Empty = Template.bind({});
Empty.args = {
  size: ButtonSizes.large,
  color: ButtonColor.empty,
  title: "Empty",
};
Empty.parameters = {
  viewMode: "docs",
};

export const EmptyGray = Template.bind({});
EmptyGray.args = {
  size: ButtonSizes.large,
  color: ButtonColor.emptyGray,
  title: "Empty",
};
EmptyGray.parameters = {
  viewMode: "docs",
};

export const Error = Template.bind({});
Error.args = {
  size: ButtonSizes.large,
  color: ButtonColor.error,
  title: "Error",
};
Error.parameters = {
  viewMode: "docs",
};

export const EmptyError = Template.bind({});
EmptyError.args = {
  size: ButtonSizes.large,
  color: ButtonColor.emptyError,
  title: "Empty Error",
};
EmptyError.parameters = {
  viewMode: "docs",
};

export const WithIconLeading = Template.bind({});
WithIconLeading.args = {
  size: ButtonSizes.large,
  color: ButtonColor.primary,
  icon: IconType.leading,
  title: "With Icon Leading",
};
WithIconLeading.parameters = {
  viewMode: "docs",
};

export const WithIconTrailing = Template.bind({});
WithIconTrailing.args = {
  size: ButtonSizes.large,
  color: ButtonColor.primary,
  icon: IconType.trailing,
  title: "With Icon Trailing",
};
WithIconTrailing.parameters = {
  viewMode: "docs",
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  size: ButtonSizes.large,
  color: ButtonColor.primary,
  icon: IconType.only,
  title: "Icon Only",
};
IconOnly.parameters = {
  viewMode: "docs",
};
