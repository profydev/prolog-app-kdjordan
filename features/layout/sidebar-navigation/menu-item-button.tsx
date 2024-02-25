import React from "react";
import { Button } from "@features/ui";
import classNames from "classnames";
import styles from "./menu-item-link.module.scss";

type MenuItemProps = {
  className?: string;
  text: string;
  iconSrc: string;
  onClick: () => void;
  isCollapsed: boolean;
};

export function MenuItemButton({
  className,
  text,
  onClick,
  iconSrc,
  isCollapsed,
}: MenuItemProps) {
  //look to see if we are rendering the arrow icon : gonna change this
  const doRotate = iconSrc.includes("arrow-left") && isCollapsed ? true : false;
  //look to see if the side menu is collapsed
  const iconStyles = classNames(styles.icon, { [styles.rotate]: doRotate });

  return (
    <li className={classNames(styles.listItem, className)}>
      <Button className={styles.anchor} onClick={onClick}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={iconStyles} src={iconSrc} alt={`${text} icon`} />{" "}
        {!isCollapsed && text}{" "}
      </Button>
    </li>
  );
}
