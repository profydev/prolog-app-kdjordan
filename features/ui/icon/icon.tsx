import Image from "next/image";
import cx from "classnames";

type IconInput = {
  src: string;
  alt: string;
  height: number;
  width: number;
  cssClass?: string;
};

export default function Icon({ src, alt, height, width, cssClass }: IconInput) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cx(cssClass)}
    />
  );
}
