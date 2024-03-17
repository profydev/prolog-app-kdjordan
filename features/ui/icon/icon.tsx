import Image from "next/image";
import { capitalize } from "lodash";
type IconInput = {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  iconPadding?: number;
  cssClass?: string;
  direction?: string;
};

export default function Icon({
  src,
  alt,
  height = 14,
  width = 14,
  iconPadding,
  direction,
}: IconInput) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{ [`margin${capitalize(direction)}`]: `${iconPadding}px` }}
    />
  );
}
