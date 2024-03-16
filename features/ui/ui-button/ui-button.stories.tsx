import { UIButton } from "./ui-button";
import { Meta, StoryFn } from "@storybook/react";
import { ButtonSize, ButtonColor, ButtonIconType } from "./ui-button.types";

export default {
  component: UIButton,
  title: "UIButton",
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof UIButton>;

const Template: StoryFn<typeof UIButton> = ({
  size,
  color,
  iconSrc,
  iconStyle,
  children,
}) => (
  <div style={{ margin: "2rem" }}>
    <UIButton color={color} size={size} iconSrc={iconSrc} iconStyle={iconStyle}>
      {children}
    </UIButton>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  size: ButtonSize.small,
  color: ButtonColor.primary,
  children: "Button CTA",
  iconSrc: "/icons/button-icon.svg",
  iconStyle: ButtonIconType.none,
};
Primary.parameters = {
  viewMode: "docs",
};
